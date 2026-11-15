// Root component: assembles the farm overview from smaller components.
import { farm } from './data/farm';
import FarmHeader from './components/FarmHeader';
import Section from './components/Section';
import VarietyList from './components/VarietyList';
import CareTaskList from './components/CareTaskList';
import OrchardStageBadge from './components/OrchardStageBadge';
import HarvestOutlook from './components/HarvestOutlook';
import PlantingCounter from './components/PlantingCounter';

export default function App() {
  return (
    <main className="app">
      <FarmHeader
        name={farm.name}
        location={farm.location}
        farmerName={farm.farmerName}
        firstPlantingYear={farm.firstPlantingYear}
        totalTrees={farm.totalTrees}
      />

      <OrchardStageBadge stage={farm.orchardStage} />
      <HarvestOutlook expectedFirstHarvestYear={farm.expectedFirstHarvestYear} />

      <Section id="varieties" title="Varieties in our orchard">
        <VarietyList varieties={farm.varieties} />
      </Section>

      <Section id="care" title="Orchard care today">
        <CareTaskList tasks={farm.careTasks} />
      </Section>

      <PlantingCounter />
    </main>
  );
}
