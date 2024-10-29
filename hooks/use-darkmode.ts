import { useEffect, useState } from "react";
import { useTheme } from "next-themes"

const useDarkMode = () => {
    const { theme, systemTheme } = useTheme();
    const [isDarkMode, setIsDarkMode ] = useState<boolean>(false);

    useEffect( () => {
        const isDarkTheme = theme === 'dark' || (theme === 'system' && systemTheme=== 'dark');
        setIsDarkMode(isDarkTheme)
    }, [theme, systemTheme]);

    return { isDarkMode };
};
export default useDarkMode;