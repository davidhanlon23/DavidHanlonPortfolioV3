import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const useScrollToSection = () => {
    const pathname = usePathname();
    const router = useRouter();

    const scrollToSection = useCallback((sectionId: string) => async (e: React.MouseEvent) => {
        e.preventDefault();
        
        /* If we're not on the home page, navigate home first */
        if (pathname !== '/') {
            await router.push('/');
        }
        
        /**  Wait a bit for the new page to load if we navigated */
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, pathname !== '/' ? 100 : 0);
    }, [pathname, router]);

    return { scrollToSection };
}

export default useScrollToSection;