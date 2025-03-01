import { useState } from 'react';
import { CalculatorFormValues, CalculationResults } from '../../types';
import { calculatePositionMetrics } from '../../utils/calculations';

const initialCalculationState: CalculationResults = {
  stopPrice: 0,
  takeProfit: 0,
  maxLost: 0,
  maxProfit: 0,
  assetPercentChange: 0,
};
const useCalculatorState = () => {
  const [isLong, setIsLong] = useState(true);
  const [results, setResults] = useState<CalculationResults>(initialCalculationState);

  const handleCalculation = (values: CalculatorFormValues) => {
    const calculationResults = calculatePositionMetrics(values);
    setResults(calculationResults);
  };

  return {
    isLong,
    setIsLong,
    results,
    handleCalculation,
  };
}; 

export default useCalculatorState;