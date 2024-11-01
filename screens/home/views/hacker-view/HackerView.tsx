import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui";
import { InteractiveTerminal } from "@/elements";
import { useGlobal } from "@/components/providers/global-provider/global-provider";

const HackerView = () => {
  const { setView } = useGlobal();
  
  return (
    <Dialog 
      open={true} 
      onOpenChange={(open) => {
        if (!open) {
          setView('default');
        }
      }}
    >
      <DialogContent className="max-w-full h-screen flex flex-col p-0 gap-0">
        <DialogHeader className="px-4 py-2">
          <DialogTitle>Hacker View</DialogTitle>
        </DialogHeader>
        <div className="flex-1 p-4">
            <InteractiveTerminal />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HackerView;