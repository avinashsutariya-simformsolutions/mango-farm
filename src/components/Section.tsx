import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode; // anything React can render: text, elements, lists, null
};

export default function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      {children}
    </section>
  );
}
