export type Direction = 'short' | 'long';

export interface CalculatorFormValues {
  direction: Direction;
  collateral: number;
  willingToRiskPercentage: number;
  currentPrice: number;
  leverage: number;
  riskToRewardRatio: number;
}

export interface CalculationResults {
  stopPrice: number;
  takeProfit: number;
  maxLost: number;
  maxProfit: number;
  assetPercentChange: number;
} 