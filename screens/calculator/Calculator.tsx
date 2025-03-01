"use client"
import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/ui';
import { DirectionToggle, Result, FormField } from './components';
import { CalculatorFormValues } from './types';
import { useCalculatorState } from './hooks';

const CalculatorSchema = Yup.object().shape({
  direction: Yup.mixed<'short' | 'long'>().oneOf(['short', 'long']).required('This field is required'),
  collateral: Yup.number().positive().typeError('Please enter a valid number').required('Required'),
  currentPrice: Yup.number().positive().typeError('Please enter a valid number').required('Required'),
  willingToRiskPercentage: Yup.number().positive().max(100, 'Cannot risk more than 100%').typeError('Please enter a valid number').required('Required'),
  leverage: Yup.number().positive().typeError('Please enter a valid number').required('Required'),
  riskToRewardRatio: Yup.number().positive().typeError('Please enter a valid number').required('Required'),
});

const Calculator = () => {
  const { isLong, setIsLong, results, handleCalculation } = useCalculatorState();
  
  const initialValues: CalculatorFormValues = {
    direction: isLong ? 'long' : 'short',
    collateral: 0,
    willingToRiskPercentage: 0,
    currentPrice: 0,
    leverage: 0,
    riskToRewardRatio: 0,
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Position Size Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Calculate your optimal position size and risk management parameters
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Calculator Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <Formik
              initialValues={initialValues}
              onSubmit={handleCalculation}
              validationSchema={CalculatorSchema}
            >
              {({ setFieldValue }) => (
                <FormikForm className="space-y-6">
                  <DirectionToggle
                    isLong={isLong}
                    setIsLong={setIsLong}
                  />

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      name="collateral"
                      label="Collateral ($)"
                      type="number"
                    />
                    <FormField
                      name="currentPrice"
                      label="Current Price ($)"
                      type="number"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                      name="willingToRiskPercentage"
                      label="Risk Percentage (%)"
                      type="number"
                    />
                    <FormField
                      name="leverage"
                      label="Leverage (x)"
                      type="number"
                    />
                  </div>

                  <FormField
                    name="riskToRewardRatio"
                    label="Risk/Reward Ratio"
                    type="number"
                  />

                  <Button
                    type="submit"
                    className="w-full py-3 text-lg font-semibold transition-all duration-200 
                             hover:scale-[1.02] active:scale-[0.98]"
                    color="primary"
                    onClick={() => {
                      setFieldValue('direction', isLong ? 'long' : 'short');
                    }}
                  >
                    Calculate Position
                  </Button>
                </FormikForm>
              )}
            </Formik>
          </div>

          {/* Results Panel */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Position Details
            </h2>
            <div className="space-y-4">
              <Result 
                text="Entry Price"
                number={results.currentPrice}
                prefix="$"
              />
              <Result 
                text="Stop Loss"
                number={results.stopPrice}
                prefix="$"
                numberClasses="text-red-600 dark:text-red-400"
              />
              <Result 
                text="Take Profit"
                number={results.takeProfit}
                prefix="$"
                numberClasses="text-green-600 dark:text-green-400"
              />
              <div className="border-t border-gray-200 dark:border-gray-700 my-4" />
              <Result 
                text="Maximum Loss"
                number={results.maxLost}
                prefix="$"
                numberClasses="text-red-600 dark:text-red-400"
              />
              <Result 
                text="Potential Profit"
                number={results.maxProfit}
                prefix="$"
                numberClasses="text-green-600 dark:text-green-400"
              />
              <Result 
                text={isLong ? "Required Price Increase" : "Required Price Decrease"}
                number={results.assetPercentChange}
                isPercent
                numberClasses={isLong ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;