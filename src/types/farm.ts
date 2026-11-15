// The stages a mango orchard moves through in a year.
export type OrchardStage = 'growing' | 'flowering' | 'fruiting' | 'harvest';

export type Farm = {
  name: string;
  location: string;
  farmerName: string;
  firstPlantingYear: number;
  totalTrees: number;
  varieties: string[];
  careTasks: string[];
  orchardStage: OrchardStage;
  expectedFirstHarvestYear: number;
};
