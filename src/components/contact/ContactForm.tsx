'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { ContactFormData } from '@/types';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(json.error || '送信に失敗しました。');
        return;
      }

      setIsSubmitted(true);
    } catch {
      setServerError('送信に失敗しました。しばらく経ってからもう一度お試しください。');
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="mb-6">
          <svg
            className="mx-auto w-16 h-16 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          お問い合わせありがとうございます
        </h2>
        <p className="text-muted leading-relaxed">
          お問い合わせを受け付けました。
          <br />
          確認メールをお送りしましたので、ご確認ください。
          <br />
          3営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto"
      noValidate
    >
      {serverError && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm" role="alert">
          {serverError}
        </div>
      )}

      {/* Name */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register('name', {
            required: 'お名前を入力してください',
            maxLength: { value: 100, message: '100文字以内で入力してください' },
          })}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="山田 太郎"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'メールアドレスを入力してください',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '正しいメールアドレスを入力してください',
            },
            maxLength: { value: 254, message: '254文字以内で入力してください' },
          })}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register('message', {
            required: 'お問い合わせ内容を入力してください',
            maxLength: { value: 2000, message: '2000文字以内で入力してください' },
          })}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-vertical"
          placeholder="お問い合わせ内容をご記入ください"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Policy Link */}
      <p className="text-sm text-muted mb-6">
        個人情報の取り扱いについては
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline hover:text-primary transition-colors"
        >
          プライバシーポリシー
        </a>
        をご確認ください。
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-foreground text-background text-sm font-semibold tracking-wider uppercase hover:bg-foreground/80 transition-colors duration-200 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </button>
    </form>
  );
}
