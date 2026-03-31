import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import SectionWrapper from '@/components/common/SectionWrapper';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'Cafe Umedaにおける個人情報の取り扱いについて。',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="プライバシーポリシー" />
      <SectionWrapper className="pt-0 pb-32">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <div className="space-y-10 text-foreground">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                1. 個人情報の取得について
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Cafe Umeda（以下「当店」といいます）は、お問い合わせフォームを通じて、
                以下の個人情報を取得します。
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#9679;</span>
                  <span>お名前</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#9679;</span>
                  <span>メールアドレス</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#9679;</span>
                  <span>お問い合わせ内容</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                2. 利用目的
              </h2>
              <p className="text-base text-muted leading-relaxed">
                取得した個人情報は、以下の目的のみに利用いたします。
              </p>
              <ul className="mt-4 space-y-2 text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#9679;</span>
                  <span>お問い合わせへの回答・ご連絡</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&#9679;</span>
                  <span>お問い合わせ受付確認メールの送信</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                3. 第三者への提供
              </h2>
              <p className="text-base text-muted leading-relaxed">
                当店は、法令に基づく場合を除き、お客様の個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                4. 個人情報の管理
              </h2>
              <p className="text-base text-muted leading-relaxed">
                当店は、お客様の個人情報を適切に管理し、不正アクセス・紛失・漏洩等の防止に努めます。
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                5. お問い合わせ窓口
              </h2>
              <p className="text-base text-muted leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <div className="mt-4 p-6 bg-card rounded-lg border border-border">
                <p className="text-foreground font-semibold">Cafe Umeda</p>
                <p className="text-sm text-muted mt-2">
                  メール: info@cafe-umeda.example.com
                  <br />
                  電話: 06-XXXX-XXXX
                </p>
              </div>
            </section>

            <p className="text-sm text-muted text-right pt-4 border-t border-border">
              制定日: 2026年3月31日
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
