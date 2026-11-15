type FarmHeaderProps = {
  name: string;
  location: string;
  farmerName: string;
  firstPlantingYear: number;
  totalTrees: number;
};

export default function FarmHeader({
  name,
  location,
  farmerName,
  firstPlantingYear,
  totalTrees,
}: FarmHeaderProps) {
  const yearsGrowing = new Date().getFullYear() - firstPlantingYear;
  const growingText =
    yearsGrowing === 0
      ? 'planted this year'
      : `growing for ${yearsGrowing} ${yearsGrowing === 1 ? 'year' : 'years'}`;

  return (
    <header>
      <h1>{name} 🥭</h1>
      <p>
        {totalTrees} mango trees in {location}, {growingText}.
      </p>
      <p>Farmed by {farmerName}</p>
    </header>
  );
}
