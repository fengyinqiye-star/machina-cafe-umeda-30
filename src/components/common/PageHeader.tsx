interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20 text-center">
      <p className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">
        {title}
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-foreground">
        {subtitle}
      </h1>
    </div>
  );
}
