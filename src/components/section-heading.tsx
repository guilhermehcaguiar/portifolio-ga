interface SectionHeadingProps {
  id: string;
  title: string;
  lede?: string;
}

export default function SectionHeading({
  id,
  title,
  lede,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2
        id={`${id}-title`}
        className="section-title font-semibold text-primary"
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-2xl leading-relaxed text-secondary">{lede}</p>
      )}
    </div>
  );
}
