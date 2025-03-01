"use client"

interface ResultProps {
  text: string;
  number: number;
  numberClasses?: string;
  isPercent?: boolean;
  prefix?: string;
}

const Result = ({ text, number, numberClasses = "", isPercent = false, prefix = "" }: ResultProps) => {
  const formattedNumber = isNaN(number) ? "0" : number.toFixed(2);
  
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600 dark:text-gray-300">{text}</span>
      <span className={`font-mono text-lg font-semibold ${numberClasses}`}>
        {prefix}{formattedNumber}{isPercent ? '%' : ''}
      </span>
    </div>
  );
};

export default Result;
