import { Button, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/ui";
import { FaUserNinja } from "react-icons/fa";
import { useGlobal } from "@/components/providers/global-provider/global-provider";
import { TooltipArrow } from "@radix-ui/react-tooltip";

const HackerModeButton = () => {
    const { view, setView } = useGlobal();
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button 
                        size="icon" 
                        aria-label="Click to activate Hacker Mode" 
                        onClick={() => setView('hacker')} 
                        className="animate-bounce"
                    >
                        <FaUserNinja />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <TooltipArrow className="fill-primary" />
                    <p>Activate Hacker Mode</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default HackerModeButton;
