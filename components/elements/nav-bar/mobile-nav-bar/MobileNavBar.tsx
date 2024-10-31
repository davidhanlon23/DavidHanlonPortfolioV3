import { useSidebar, Button } from "@/ui";
import { Menu } from "lucide-react";

const MobileNavBar = () => {
    const { toggleSidebar } = useSidebar()
    return(
        <div className="ml-auto flex gap-4 sm:gap-6 items-center md:hidden">
            <Button
                data-sidebar="trigger"
                variant="ghost"
                onClick={toggleSidebar}
            >
                <Menu />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </div>
    );
};
export default MobileNavBar;