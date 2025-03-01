"use client"
import React, { useState } from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components';
import { DirectionToggle, Result } from './components';

type Direction = 'short' | 'long';

const CalculatorSchema = Yup.object().shape({
  direction: Yup.mixed<Direction>().oneOf(['short', 'long']).required('This field is required'),
  collateral: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  currentPrice: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  willingToRiskPercentage: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  leverage: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
  riskToRewardRatio: Yup.number().positive().typeError('you must specify a number').required('This field is required'),
});


const Calculator = () => {
  const [stopPrice, setStopPrice] = useState<number>(0);
  const [takeProfit, setTakeProfit] = useState<number>(0);
  const [maxLost, setMaxLost] = useState<number>(0);
  const [maxProfit, setMaxProfit] = useState<number>(0);
  const [assetPercentChange, setAssetPercentChange] = useState<number>(0);
  const [isLong, setIsLong] = useState<boolean>(true);
  const sectionGroupClasses = 'grid grid-col-2 mb-4';
  const labelClasses = 'text-2xl text-semibold text-black dark:text-white mr-4 mb-4';
  const fieldClasses = 'rounded-lg p-2';
  const errorMsgClasses = 'text-red-700 dark:text-red-500';

  const doCalculations = (values:any) => {
    const {
      direction, collateral, willingToRiskPercentage, currentPrice, leverage, riskToRewardRatio,
    } = values;

    const totalDollarValue = (collateral * leverage);
    const sharesCanBuy = (collateral * leverage) / currentPrice;
    const liquidationPrice = (totalDollarValue - collateral) / sharesCanBuy;
    const perPercentRate = (currentPrice - liquidationPrice) / 100;
    const maxPossibleLost = collateral * (willingToRiskPercentage / 100);
    const maxPossibleProfit = maxPossibleLost * riskToRewardRatio;

    if (direction === 'long') {
      const stopLostPrice = currentPrice - (willingToRiskPercentage * perPercentRate);
      const targetProfit = (willingToRiskPercentage * riskToRewardRatio);
      const takeProfitPrice = currentPrice + (targetProfit * perPercentRate);
      const percentIncreaseNeeded = ((takeProfitPrice - currentPrice) / currentPrice) * 100;

      setTakeProfit(takeProfitPrice);
      setStopPrice(stopLostPrice);
      setMaxLost(maxPossibleLost);
      setMaxProfit(maxPossibleProfit);
      setAssetPercentChange(percentIncreaseNeeded);
    } else {
      const stopLostPrice = currentPrice + (willingToRiskPercentage * perPercentRate);
      const targetProfit = (willingToRiskPercentage * riskToRewardRatio);
      const takeProfitPrice = currentPrice - (targetProfit * perPercentRate);
      const percentDecreaseNeeded = ((currentPrice - takeProfitPrice) / currentPrice) * 100;
      setTakeProfit(takeProfitPrice);
      setStopPrice(stopLostPrice);
      setMaxLost(maxPossibleLost);
      setMaxProfit(maxPossibleProfit);
      setAssetPercentChange(percentDecreaseNeeded);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Formik
        initialValues={{
          direction: isLong ? 'long' : 'short',
          collateral: 0,
          willingToRiskPercentage: 0,
          currentPrice: 0,
          leverage: 0,
          riskToRewardRatio: 0,
        }}
        onSubmit={(values) => {
          doCalculations(values);
        }}
        validationSchema={CalculatorSchema}
      >
        {({ setFieldValue }) => (
          <Form className="flex flex-col justify-center bg-gray-100 dark:bg-[#121212] shadow-2xl dark:shadow-[#222] p-4 rounded-lg mx-auto w-4/5 md:w-1/2">

            <DirectionToggle
              isLong={isLong}
              setIsLong={setIsLong}
              labelClasses={labelClasses}
              sectionGroupClasses={sectionGroupClasses}
            />

            <div id="collateral-group" className={sectionGroupClasses}>
              <label className={labelClasses} htmlFor="collateral">
                Collateral
              </label>
              <Field className={fieldClasses} id="collateral" name="collateral" type="number" />
              <ErrorMessage
                component="a"
                className={errorMsgClasses}
                name="collateral"
              />
            </div>

            <div id="willing-to-risk-in-percent-group" className={sectionGroupClasses}>
              <label className={labelClasses} htmlFor="willingToRiskPercentage">
                Willing to Risk (in %)
              </label>
              <Field className={fieldClasses} id="willingToRiskPercentage" name="willingToRiskPercentage" type="number" />
              <ErrorMessage
                component="a"
                className={errorMsgClasses}
                name="willingToRiskPercentage"
              />
            </div>

            <div id="current-price-group" className={sectionGroupClasses}>
              <label className={labelClasses} htmlFor="currentPrice">
                Current Price
              </label>
              <Field className={fieldClasses} id="currentPrice" name="currentPrice" type="number" />
              <ErrorMessage component="a" className={errorMsgClasses} name="currentPrice" />
            </div>

            <div id="leverage-group" className={sectionGroupClasses}>
              <label className={labelClasses} htmlFor="leverage">
                Leverage
              </label>
              <Field className={fieldClasses} id="leverage" name="leverage" type="number" />
              <ErrorMessage
                component="a"
                className={errorMsgClasses}
                name="leverage"
              />
            </div>

            <div id="risk-to-reward-ratio-group" className={sectionGroupClasses}>
              <label className={labelClasses} htmlFor="riskToRewardRatio">
                Risk to Reward Ratio (i.e. 2 : 1)
              </label>
              <Field className={fieldClasses} id="riskToRewardRatio" name="riskToRewardRatio" type="number" />
              <ErrorMessage
                component="a"
                className={errorMsgClasses}
                name="riskToRewardRatio"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <Button
                type="submit"
                className="py-2 px-16 animate-pulse"
                aria-label="calculate"
                color="primary"
                onClick={() => {
                  setFieldValue('direction', isLong ? 'long' : 'short');
                }}
              >Calculate</Button>
            </div>
          </Form>
        )}

      </Formik>
      {/* Calculated Results Section */}
      <div className="text-lg md:text-2xl font-bold text-black dark:text-white mx-auto p-8 bg-gray-100 dark:bg-[#121212] shadow-2xl dark:shadow-[#222] rounded-lg mt-8 w-4/5 md:w-1/2">
        <Result text="Stop Lost:" number={stopPrice} />
        <Result text="Take Profit:" number={takeProfit} />
        <Result text="Max Possible Lost:" number={maxLost} numberClasses="text-red-700 dark:text-red-500" />
        <Result text="Max Possible Profit:" number={maxProfit} numberClasses="text-green-700 dark:text-green-500" />
        {isLong ? (
          <Result text="Percent Increase Needed: " number={assetPercentChange} numberClasses="text-green-700 dark:text-green-500" isPercent />
        ) : <Result text="Percent Decrease Needed: " number={assetPercentChange} numberClasses="text-red-700 dark:text-red-500" isPercent />}
      </div>
    </div>
  );
};
export default Calculator;