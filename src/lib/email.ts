import { Resend } from 'resend';

// Resendインスタンスはリクエスト時に生成する（ビルド時の RESEND_API_KEY 未設定エラーを防止）
function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

/** HTMLエスケープ（XSS防止） */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** HTMLタグ除去（サニタイズ） */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '');
}

interface SendContactEmailParams {
  name: string;
  email: string;
  message: string;
}

/** オーナー通知メールを送信 */
export async function sendOwnerNotification({ name, email, message }: SendContactEmailParams) {
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!toEmail) {
    throw new Error('CONTACT_TO_EMAIL is not configured');
  }

  const resend = getResend();
  return resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: '[Cafe Umeda] 新しいお問い合わせ',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6B4F3A;">新しいお問い合わせがありました</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #E8DFD3; font-weight: bold; width: 120px;">お名前</td>
            <td style="padding: 12px; border-bottom: 1px solid #E8DFD3;">${esc(name)}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #E8DFD3; font-weight: bold;">メール</td>
            <td style="padding: 12px; border-bottom: 1px solid #E8DFD3;">${esc(email)}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #E8DFD3; font-weight: bold;">内容</td>
            <td style="padding: 12px; border-bottom: 1px solid #E8DFD3; white-space: pre-wrap;">${esc(message)}</td>
          </tr>
        </table>
      </div>
    `,
  });
}

/** 送信者への自動返信メール */
export async function sendAutoReply({ name, email, message }: SendContactEmailParams) {
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  const resend = getResend();
  return resend.emails.send({
    from: fromEmail,
    to: email,
    subject: '[Cafe Umeda] お問い合わせを受け付けました',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #6B4F3A;">
        <h2 style="color: #6B4F3A;">お問い合わせありがとうございます</h2>
        <p>${esc(name)} 様</p>
        <p>以下の内容でお問い合わせを受け付けました。<br>3営業日以内にご連絡いたします。</p>
        <hr style="border: none; border-top: 1px solid #E8DFD3; margin: 24px 0;" />
        <h3 style="color: #8B7355; font-size: 14px;">送信内容の控え</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 120px;">お名前</td>
            <td style="padding: 8px;">${esc(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">メール</td>
            <td style="padding: 8px;">${esc(email)}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">内容</td>
            <td style="padding: 8px; white-space: pre-wrap;">${esc(message)}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #E8DFD3; margin: 24px 0;" />
        <p style="font-size: 12px; color: #8B7355;">
          ※ このメールは自動送信です。このメールへの返信はお受けできません。<br>
          Cafe Umeda
        </p>
      </div>
    `,
  });
}
