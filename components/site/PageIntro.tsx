type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="page-shell section-shell pt-32">
      <div className="max-w-4xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title mt-5">{title}</h1>
        <p className="lede mt-6 max-w-3xl">{description}</p>
      </div>
    </header>
  );
}
