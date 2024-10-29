import { ILogo } from "./type";
import { calculateHeight } from "./utils";
import { useIsDarkMode } from "@/hooks";

const DavidHanlonLogo = ({
    classes = 'w-36 h-36 text-dh-secondary-dark-500 dark:text-dh-secondary-dark-500 hover:text-black dark:hover:text-white'
}: ILogo) => {
    const { isDarkMode } = useIsDarkMode();
    // const defaultColor = isDarkMode ? '#fff' : '#111111';
    // const calculatedHeight = calculateHeight(width);
    return (
        <svg className={`${classes}`} fill="currentColor"  viewBox="0 0 281 27" xmlns="http://www.w3.org/2000/svg">
        <g id="A" transform="translate(-154.000000, -242.000000)" fill="currentColor" fill-rule="nonzero">
            <g id="Group" transform="translate(154.000000, 171.000000)">
                <g transform="translate(0.000000, 71.000000)" id="Shape">
                        <path d="M11.1,0.6 C19.1,0.6 24.7,5.8 24.7,13.4 C24.7,20.9 19.1,26.2 10.9,26.2 L0.2,26.2 L0.2,0.7 L11.1,0.7 L11.1,0.6 Z M6.6,21 L11.2,21 C15.2,21 18,17.9 18,13.5 C18,9 15,5.9 10.9,5.9 L6.6,5.9 L6.6,21 Z"></path>
                        <path d="M34.1,21.5 L32.2,26.2 L25.5,26.2 L36.5,0.7 L43.2,0.7 L54,26.2 L47,26.2 L45.2,21.5 L34.1,21.5 Z M39.7,7.1 L36,16.5 L43.4,16.5 L39.7,7.1 Z"></path>
                        <polygon points="63.7 26.2 53.8 0.7 60.7 0.7 67.2 19.5 73.7 0.7 80.4 0.7 70.4 26.2"></polygon>
                        <polygon points="82.5 26.2 82.5 0.7 89 0.7 89 26.2"></polygon>
                        <path d="M105.3,0.6 C113.3,0.6 118.9,5.8 118.9,13.4 C118.9,20.9 113.3,26.2 105.1,26.2 L94.4,26.2 L94.4,0.7 L105.3,0.7 L105.3,0.6 Z M100.8,21 L105.4,21 C109.4,21 112.2,17.9 112.2,13.5 C112.2,9 109.2,5.9 105.1,5.9 L100.8,5.9 L100.8,21 Z"></path>
                        <polygon points="145.4 26.2 145.4 15 130 15 130 26.2 127.1 26.2 127.1 0.7 130 0.7 130 12.2 145.4 12.2 145.4 0.7 148.3 0.7 148.3 26.2"></polygon>
                        <path d="M158.4,19.7 L155.6,26.2 L152.5,26.2 L164,0.7 L167,0.7 L178.4,26.2 L175.2,26.2 L172.4,19.7 L158.4,19.7 Z M165.4,3.9 L159.7,16.8 L171.2,16.8 L165.4,3.9 Z"></path>
                        <polygon points="200.6 26.2 185.3 5.7 185.3 26.2 182.4 26.2 182.4 0.7 185.4 0.7 200.7 21.2 200.7 0.7 203.6 0.7 203.6 26.2"></polygon>
                        <polygon points="225.1 23.4 225.1 26.2 211 26.2 211 0.7 213.9 0.7 213.9 23.5 225.1 23.5"></polygon>
                        <path d="M254.4,13.4 C254.4,20.6 248.5,26.3 241.1,26.3 C233.6,26.3 227.7,20.6 227.7,13.4 C227.7,6.2 233.6,0.6 241.1,0.6 C248.5,0.6 254.4,6.2 254.4,13.4 Z M230.6,13.4 C230.6,19 235.3,23.5 241,23.5 C246.7,23.5 251.4,19 251.4,13.4 C251.4,7.8 246.7,3.3 241,3.3 C235.3,3.3 230.6,7.8 230.6,13.4 Z"></path>
                        <polygon points="277.6 26.2 262.3 5.7 262.3 26.2 259.4 26.2 259.4 0.7 262.4 0.7 277.7 21.2 277.7 0.7 280.6 0.7 280.6 26.2"></polygon>
                </g>
            </g>
        </g>
    </svg>
    );
};

export default DavidHanlonLogo;