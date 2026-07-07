interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl gap-4`}>
      <span className="eyebrow">
        <span className="h-px w-8 bg-rebar-500" />
        {eyebrow}
      </span>
      <h2 className={`text-3xl sm:text-4xl font-semibold leading-[1.1] ${light ? 'text-white' : 'text-steel-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`font-body text-base normal-case tracking-normal ${light ? 'text-steel-100/80' : 'text-concrete-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
