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
  collateral: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  currentPrice: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  willingToRiskPercentage: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  leverage: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  riskToRewardRatio: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
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
    <div className="flex flex-col w-full my-8">
      <Formik
        initialValues={initialValues}
        onSubmit={handleCalculation}
        validationSchema={CalculatorSchema}
      >
        {({ setFieldValue }) => (
          <FormikForm className="flex flex-col justify-center bg-gray-100 dark:bg-[#121212] shadow-2xl dark:shadow-[#222] p-4 rounded-lg mx-auto w-4/5 md:w-1/2">
            <DirectionToggle
              isLong={isLong}
              setIsLong={setIsLong}
            />

            <FormField
              name="collateral"
              label="Collateral"
              type="number"
            />

            <FormField
              name="willingToRiskPercentage"
              label="Willing to Risk (in %)"
              type="number"
            />

            <FormField
              name="currentPrice"
              label="Current Price"
              type="number"
            />

            <FormField
              name="leverage"
              label="Leverage"
              type="number"
            />

            <FormField
              name="riskToRewardRatio"
              label="Risk to Reward Ratio (i.e. 2 : 1)"
              type="number"
            />

            <div className="mt-8 flex justify-center">
              <Button
                type="submit"
                className="py-2 px-16 animate-pulse"
                color="primary"
                onClick={() => {
                  setFieldValue('direction', isLong ? 'long' : 'short');
                }}
              >
                Calculate
              </Button>
            </div>
          </FormikForm>
        )}
      </Formik>

      <div className="text-lg md:text-2xl font-bold text-black dark:text-white mx-auto p-8 bg-gray-100 dark:bg-[#121212] shadow-2xl dark:shadow-[#222] rounded-lg mt-8 w-4/5 md:w-1/2">
        <Result text="Stop Lost:" number={results.stopPrice} />
        <Result text="Take Profit:" number={results.takeProfit} />
        <Result text="Max Possible Lost:" number={results.maxLost} numberClasses="text-red-700 dark:text-red-500" />
        <Result text="Max Possible Profit:" number={results.maxProfit} numberClasses="text-green-700 dark:text-green-500" />
        {isLong ? (
          <Result text="Percent Increase Needed: " number={results.assetPercentChange} numberClasses="text-green-700 dark:text-green-500" isPercent />
        ) : (
          <Result text="Percent Decrease Needed: " number={results.assetPercentChange} numberClasses="text-red-700 dark:text-red-500" isPercent />
        )}
      </div>
    </div>
  );
};

export default Calculator;