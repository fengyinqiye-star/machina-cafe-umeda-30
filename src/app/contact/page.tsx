import type { Metadata } from 'next';
import PageHeader from '@/components/common/PageHeader';
import SectionWrapper from '@/components/common/SectionWrapper';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'Cafe Umedaへのお問い合わせはこちらのフォームからお気軽にどうぞ。',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" subtitle="お問い合わせ" />
      <SectionWrapper className="pt-0 pb-32">
        <ContactForm />
      </SectionWrapper>
    </>
  );
}
