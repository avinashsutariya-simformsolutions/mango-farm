import type { OrchardStage } from '../types/farm';

// One label per stage. Record<OrchardStage, string> means TypeScript
// reports an error if any stage is missing from this object.
const stageLabels: Record<OrchardStage, string> = {
  growing: '🌱 Young trees are growing',
  flowering: '🌼 The trees are flowering',
  fruiting: '🥭 Fruit is forming on the trees',
  harvest: '🧺 Harvest in progress',
};

type OrchardStageBadgeProps = {
  stage: OrchardStage;
};

export default function OrchardStageBadge({ stage }: OrchardStageBadgeProps) {
  const className = stage === 'harvest' ? 'badge badge--live' : 'badge';
  return <p className={className}>{stageLabels[stage]}</p>;
}
