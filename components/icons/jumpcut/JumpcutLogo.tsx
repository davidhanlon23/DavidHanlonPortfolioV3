import { ILogo } from "../logo/type";

const JumpcutLogo = ({
    classes = 'w-36 h-36 text-dh-secondary-dark-500 dark:text-dh-secondary-dark-500 hover:text-black dark:hover:text-white'
}: ILogo) => {
    return (
        <svg className={`${classes}`} fill="currentColor" viewBox="0 0 578.87 286.3" xmlns="http://www.w3.org/2000/svg">
            <g id="Layer_1" data-name="Layer 1" fill="currentColor" fillRule="nonzero">
                <path d="M435.93.4A143,143,0,0,0,293.6,130.27H174.24l.31-.31L253.48,51,235.26,32.82,156,112.05V0H130.27V112.05L51,32.82,32.82,51,111.75,130h0l.31.31H0V156H112.05L32.82,235.26,51,253.48l79.24-79.24V286.3H156V174.24l79.23,79.24,18.22-18.22L174.24,156H293.57A142.93,142.93,0,1,0,435.93.4Z" />
            </g>
        </svg>
    );
};

export default JumpcutLogo;
