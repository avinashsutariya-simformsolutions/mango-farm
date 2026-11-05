// src/App.tsx
// Root component: the farm overview. Other sections will grow from here.
import PlantingCounter from './components/PlantingCounter';

type Farm = {
  name: string;
  location: string;
  establishedYear: number;
  totalPlants: number;
  foundedBy: string;
  varieties: string[];
  upcomingTasks: string[];
  isHarvestSeason: boolean;
};

// Fixed data lives outside the component, so it isn't recreated on every render.
const farm: Farm = {
  name: 'Aamrai',
  location: 'Nankhi, Himmatnagar, Gujarat',
  establishedYear: 2026,
  totalPlants: 540,
  foundedBy: 'Avinash Sutariya',
  varieties: ['Alphonso', 'Kesar', 'Totapuri', 'Vanraj', 'Mallika', 'Miyazaki'],
  upcomingTasks: [],
  isHarvestSeason: false,
};

export default function App() {
  const yearsGrowing = new Date().getFullYear() - farm.establishedYear;
  const hasTasks = farm.upcomingTasks.length > 0; // a real boolean: avoids the "0" trap
  console.log(<h1 className="title">Hello</h1>);
  return (
    <main className="app">
      <header>
        <h1>{farm.name} 🥭</h1>
        <p>
          {farm.totalPlants} trees in {farm.location}, growing for {yearsGrowing}{' '}
          {yearsGrowing === 1 ? 'year' : 'years'}.
        </p>
        <p>Founded by {farm.foundedBy}</p>
      </header>

      <section aria-labelledby="varieties-heading">
        <h2 id="varieties-heading">Our varieties</h2>
        <ul>
          {farm.varieties.map((variety) => (
            <li key={variety}>{variety}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tasks-heading">
        <h2 id="tasks-heading">Upcoming tasks</h2>
        {hasTasks ? (
          <ul>
            {farm.upcomingTasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        ) : (
          <p>No tasks today 🌤️</p>
        )}
      </section>

      {farm.isHarvestSeason ? (
        <p className="badge badge--live">🧺 Harvest in progress</p>
      ) : (
        <p className="badge">🌱 Trees are growing. Harvest season is coming.</p>
      )}

      <PlantingCounter />
    </main>
  );
}