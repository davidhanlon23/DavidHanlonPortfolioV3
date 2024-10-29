import { ILogo } from "./type";
import { calculateHeight } from "./utils";
import { useIsDarkMode } from "@/hooks";

const Logo = ({ 
    color,
    width = 300, 
    height = undefined, 
    orientation = 'vertical' 
}: ILogo) => {
    const { isDarkMode } = useIsDarkMode();
    const defaultColor = isDarkMode ? '#fff' : '#111111'
    const calculatedHeight = calculateHeight(width);
    
    const config = {
        vertical: {
            viewBox: "0 0 300 269.1557867214008",
            candleStickTransform: "matrix(1.5,0,0,1.5,75,-3.835000514984131)",
            textTransform: "matrix(4.683109205496165,0,0,4.683109205496165,-2.8098661932218443,174.5569861297714)"
        },
        horizontal: {
            viewBox: "0 0 500 120",
            candleStickTransform: "matrix(1.2,0,0,1.2,10,10)",
            textTransform: "matrix(4.683109205496165,0,0,4.683109205496165,140,30)"
        }
    };

    const activeConfig = config[orientation];

    return (
        <svg 
            id="201467388" 
            viewBox={activeConfig.viewBox}
            height={height || calculatedHeight} 
            width={width} 
        >
            <defs id="SvgjsDefs1348"></defs>
            <g 
                id="SvgjsG1349" 
                data-feature-key="7KWit6-0" 
                transform={activeConfig.candleStickTransform} 
                fill={color || defaultColor}
            >
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
            <g 
                id="SvgjsG1350" 
                data-feature-key="ewgXDI-0" 
                transform={activeConfig.textTransform} 
                fill={color || defaultColor}
            >
                <path d="M6.08 17.36 c0.56 0 0.96 -0.08 1.4 -0.2 l0 2.62 c-0.44 0.2 -1.16 0.34 -2.22 0.34 c-1.74 0 -3.2 -0.58 -3.2 -3.78 l0 -4.14 l-1.46 0 l0 -2.6 l1.46 0 l0 -2.44 l3.16 0 l0 2.44 l2.22 0 l0 2.6 l-2.22 0 l0 4.14 c0 0.46 0.12 1.02 0.86 1.02 z M15.84 9.44 c0.28 0 0.56 0 0.82 0.06 l0 3.02 c-0.24 -0.06 -0.52 -0.06 -0.72 -0.06 c-1.92 0 -3.46 1.38 -3.62 3.3 l0 4.24 l-3.16 0 l0 -10.4 l3.16 0 l0 2.54 c0.48 -1.56 1.68 -2.7 3.52 -2.7 z M23.44 9.42 c2.36 0 5.66 1.78 5 6.48 l-7.26 0 c0.36 1.08 1.3 1.64 2.56 1.64 c1.28 0 1.68 -0.28 2.4 -0.58 l1.74 1.68 c-0.92 0.9 -2.16 1.56 -4.26 1.56 c-2.58 0 -5.66 -1.78 -5.66 -5.36 c0 -3.64 3.12 -5.42 5.48 -5.42 z M23.44 12.120000000000001 c-0.9 0 -1.82 0.52 -2.22 1.56 l4.42 0 c-0.32 -1.04 -1.3 -1.56 -2.2 -1.56 z M36.620000000000005 9.44 c1.94 0 3.92 1.3 3.92 4.6 l0 5.96 l-3.16 0 l0 -5.74 c0 -1.58 -0.54 -2.08 -1.54 -2.08 c-1.42 0 -2.24 1.38 -2.44 1.98 l0 5.84 l-3.16 0 l0 -10.4 l3.16 0 l0 1.8 c0.2 -0.5 1.26 -1.96 3.22 -1.96 z M49.940000000000005 5.859999999999999 l3.16 0 l0 5.08 l0 9.06 l-3.16 0 l0 -1.04 c-0.14 0.36 -1.08 1.24 -2.68 1.24 c-2.38 0 -5.12 -1.7 -5.12 -5.42 c0 -3.58 2.74 -5.36 5.12 -5.36 c1.6 0 2.54 0.92 2.68 1.14 l0 -4.7 z M47.720000000000006 17.42 c1.3 0 2.36 -0.9 2.36 -2.64 c0 -1.68 -1.06 -2.58 -2.36 -2.58 c-1.36 0 -2.52 0.92 -2.52 2.58 c0 1.72 1.16 2.64 2.52 2.64 z M64.66 9.6 l-5 7.64 l4.66 0 l0 2.76 l-9.7 0 l5 -7.64 l-4.54 0 l0 -2.76 l9.58 0 z"></path>
            </g>
        </svg>
    );
};

export default Logo;
