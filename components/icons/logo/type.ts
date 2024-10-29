export interface ITrendzLogo {
    color?: string;
    width?: number;
    height?: number;
}
export type LogoOrientation = 'horizontal' | 'vertical'
export interface ILogo extends ITrendzLogo {
    orientation?: LogoOrientation;
}