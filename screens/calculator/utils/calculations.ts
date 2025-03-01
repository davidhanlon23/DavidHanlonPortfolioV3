import { CalculatorFormValues, CalculationResults } from '../types';

export const calculatePositionMetrics = (values: CalculatorFormValues): CalculationResults => {
  const {
    direction, collateral, willingToRiskPercentage, currentPrice, leverage, riskToRewardRatio,
  } = values;

  const totalDollarValue = (collateral * leverage);
  const sharesCanBuy = totalDollarValue / currentPrice;
  const liquidationPrice = (totalDollarValue - collateral) / sharesCanBuy;
  const perPercentRate = (currentPrice - liquidationPrice) / 100;
  const maxPossibleLost = collateral * (willingToRiskPercentage / 100);
  const maxPossibleProfit = maxPossibleLost * riskToRewardRatio;

  if (direction === 'long') {
    const stopLostPrice = currentPrice - (willingToRiskPercentage * perPercentRate);
    const targetProfit = (willingToRiskPercentage * riskToRewardRatio);
    const takeProfitPrice = currentPrice + (targetProfit * perPercentRate);
    const percentIncreaseNeeded = ((takeProfitPrice - currentPrice) / currentPrice) * 100;

    return {
      stopPrice: stopLostPrice,
      takeProfit: takeProfitPrice,
      maxLost: maxPossibleLost,
      maxProfit: maxPossibleProfit,
      assetPercentChange: percentIncreaseNeeded,
    };
  }

  const stopLostPrice = currentPrice + (willingToRiskPercentage * perPercentRate);
  const targetProfit = (willingToRiskPercentage * riskToRewardRatio);
  const takeProfitPrice = currentPrice - (targetProfit * perPercentRate);
  const percentDecreaseNeeded = ((currentPrice - takeProfitPrice) / currentPrice) * 100;

  return {
    stopPrice: stopLostPrice,
    takeProfit: takeProfitPrice,
    maxLost: maxPossibleLost,
    maxProfit: maxPossibleProfit,
    assetPercentChange: percentDecreaseNeeded,
  };
}; 