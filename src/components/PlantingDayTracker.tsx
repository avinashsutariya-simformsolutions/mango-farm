import { useState } from 'react';

const TREES_PER_ROW = 10;

export default function PlantingDayTracker() {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [rowsCompleted, setRowsCompleted] = useState(0);

  function plantOneTree() {
    setTreesPlanted((t) => t + 1);
  }

  function plantFullRow() {
    // Two state updates, ONE render: React batches them.
    setTreesPlanted((t) => t + TREES_PER_ROW);
    setRowsCompleted((r) => r + 1);
  }

  return (
    <section aria-labelledby="planting-day-heading">
      <h2 id="planting-day-heading">Planting day</h2>
      <p>
        {treesPlanted} trees planted · {rowsCompleted} rows completed
      </p>

      <button type="button" onClick={plantOneTree}>
        Plant 1 tree
      </button>
      <button type="button" onClick={plantFullRow}>
        Plant a full row ({TREES_PER_ROW})
      </button>
    </section>
  );
}
