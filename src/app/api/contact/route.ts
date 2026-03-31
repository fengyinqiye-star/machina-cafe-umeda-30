import { NextRequest, NextResponse } from 'next/server';
import { sendOwnerNotification, sendAutoReply, stripHtml } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // バリデーション
    const { name, email, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'お名前を入力してください' },
        { status: 400 }
      );
    }
    if (name.length > 100) {
      return NextResponse.json(
        { error: 'お名前は100文字以内で入力してください' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'メールアドレスを入力してください' },
        { status: 400 }
      );
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください' },
        { status: 400 }
      );
    }
    if (email.length > 254) {
      return NextResponse.json(
        { error: 'メールアドレスは254文字以内で入力してください' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'お問い合わせ内容を入力してください' },
        { status: 400 }
      );
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'お問い合わせ内容は2000文字以内で入力してください' },
        { status: 400 }
      );
    }

    // サニタイズ
    const sanitizedData = {
      name: stripHtml(name.trim()),
      email: email.trim(),
      message: stripHtml(message.trim()),
    };

    // メール送信（fire-and-forget禁止 - Promise.allSettledで両方完了を待つ）
    const [ownerResult, autoReplyResult] = await Promise.allSettled([
      sendOwnerNotification(sanitizedData),
      sendAutoReply(sanitizedData),
    ]);

    // エラーチェック
    if (ownerResult.status === 'rejected') {
      console.error('Owner notification failed:', ownerResult.reason);
    }
    if (autoReplyResult.status === 'rejected') {
      console.error('Auto reply failed:', autoReplyResult.reason);
    }

    // オーナー通知が失敗した場合はエラーを返す
    if (ownerResult.status === 'rejected') {
      return NextResponse.json(
        { error: '送信に失敗しました。しばらく経ってからもう一度お試しください。' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: '送信に失敗しました。しばらく経ってからもう一度お試しください。' },
      { status: 500 }
    );
  }
}
