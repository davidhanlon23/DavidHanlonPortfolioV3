"use client"
const Result = ({
    text, 
    number, 
    isPercent, 
    numberClasses,
  }: { 
    text: string, 
    number: any, 
    isPercent?: boolean, 
    numberClasses?: string 
}) => {
    return (
        <div className="flex">
        <p>{text}</p>
        <p className={`${numberClasses || ''}`}>
          &nbsp;
          {isPercent ? '' : '$'}
          {number.toFixed(2)}
          {isPercent ? '%' : ''}
        </p>
      </div>
    );
  };
export default Result;
