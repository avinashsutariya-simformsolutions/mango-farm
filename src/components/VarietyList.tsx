type VarietyListProps = {
  varieties: string[];
};

export default function VarietyList({ varieties }: VarietyListProps) {
  return (
    <ul>
      {varieties.map((variety) => (
        <li key={variety}>{variety}</li>
      ))}
    </ul>
  );
}
