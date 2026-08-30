interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-4 pt-12 md:px-8 lg:px-10 lg:pt-16">
      <h1 className="heading-1 text-ink">{title}</h1>
    </div>
  );
}
