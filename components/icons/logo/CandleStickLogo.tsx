import { ITrendzLogo } from "./type";
import { calculateHeight } from "./utils";
import { useIsDarkMode } from "@/hooks";

const TrendzLogo = ({
    color,
    width = 300,
    height = undefined
}: ITrendzLogo) => {
    const { isDarkMode } = useIsDarkMode();
    const defaultColor = isDarkMode ? '#fff' : '#111111';
    const calculatedHeight = calculateHeight(width);
    return (
        <svg 
            id="201467388" 
            viewBox="0 0 300 269.1557867214008" 
            height={height || calculatedHeight} 
            width={width}
          
            >
                <defs id="SvgjsDefs1348"></defs>
                <g id="SvgjsG1349" data-feature-key="7KWit6-0" transform="matrix(1.5,0,0,1.5,75,-3.835000514984131)" fill={color || defaultColor}>
                    <title>candle_stick_cp</title>
                    <path d="M29,98.32H10V49.83H29ZM26.86,51.94H12.11V96.21H26.86Z"></path>
                    <path d="M22.65,51.94H16.32V35.08h6.33ZM20.54,37.19H18.43V49.83h2.11Z"></path>
                    <path d="M22.65,113.11H16.32V96.25h6.33ZM20.54,98.32H18.43V111h2.11Z"></path>
                    <path d="M59.49,75.13h-19V26.64h19ZM57.38,28.75H42.62V73H57.38Z"></path>
                    <path d="M53.16,28.75H46.84V11.89h6.32ZM51.05,14H49V26.64h2.1Z"></path>
                    <path d="M53.16,89.92H46.84V73.06h6.32ZM51.05,75.13H49V87.78h2.1Z"></path>
                    <path d="M90,98.32H71V49.83H90ZM87.89,51.94H73.14V96.21H87.89Z"></path>
                    <path d="M83.68,51.94H77.35V35.08h6.33ZM81.57,37.19H79.46V49.83h2.11Z"></path>
                    <path d="M83.68,113.11H77.35V96.25h6.33ZM81.57,98.32H79.46V111h2.11Z"></path>
                </g>
              
            </svg>
    );
};

export default TrendzLogo;
