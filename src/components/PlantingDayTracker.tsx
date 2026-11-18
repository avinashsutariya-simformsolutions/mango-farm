import { useState } from 'react';

const TREES_PER_ROW = 10;

export default function PlantingDayTracker() {
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [rowsCompleted, setRowsCompleted] = useState(0);

  // Learning only: shows when React calls this function (a "render").
  // In development, StrictMode makes each render log twice.
  console.log('PlantingDayTracker rendered', { treesPlanted, rowsCompleted });

  function plantOneTree() {
    setTreesPlanted((t) => t + 1);
  }

  function plantFullRow() {
    // Two state updates, ONE render: React batches them.
    setTreesPlanted((t) => t + TREES_PER_ROW);
    setRowsCompleted((r) => r + 1);
  }

  // ── Topic 4 experiments (remove after the lesson) ──
  function plantThreeBuggy() {
    setTreesPlanted(treesPlanted + 1);
    setTreesPlanted(treesPlanted + 1);
    setTreesPlanted(treesPlanted + 1);
  }

  function logAfterDelay() {
    setTreesPlanted((t) => t + 1);
    setTimeout(() => {
      console.log('Value seen 2s later:', treesPlanted);
    }, 2000);
  }
  // ───────────────────────────────────────────────────

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

      <hr />
      <p>Experiments:</p>
      <button type="button" onClick={plantThreeBuggy}>
        Plant 3 (buggy)
      </button>
      <button type="button" onClick={logAfterDelay}>
        +1, then log after 2s
      </button>
    </section>
  );
}
