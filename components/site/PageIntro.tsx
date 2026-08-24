type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="page-shell pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16">
      <div className="max-w-4xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title mt-4 sm:mt-5">{title}</h1>
        <p className="lede mt-4 sm:mt-6 max-w-3xl">{description}</p>
      </div>
    </header>
  );
}
