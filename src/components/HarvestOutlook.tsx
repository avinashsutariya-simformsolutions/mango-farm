type HarvestOutlookProps = {
  expectedFirstHarvestYear: number;
};

export default function HarvestOutlook({ expectedFirstHarvestYear }: HarvestOutlookProps) {
  const yearsToGo = expectedFirstHarvestYear - new Date().getFullYear();

  // Returning null tells React: "render nothing here."
  if (yearsToGo <= 0) {
    return null;
  }

  return (
    <p>
      First harvest expected in {expectedFirstHarvestYear} ({yearsToGo}{' '}
      {yearsToGo === 1 ? 'year' : 'years'} to go). We'll start selling our mangoes after that harvest.
    </p>
  );
}
