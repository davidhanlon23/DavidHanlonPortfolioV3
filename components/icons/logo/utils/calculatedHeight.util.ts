const aspectRatio = 269.1557867214008 / 300; // original height / original width

export const calculateHeight = (width: string | number): number => {
    return typeof width === 'string' 
        ? parseFloat(width) * aspectRatio 
        : width * aspectRatio;
};
