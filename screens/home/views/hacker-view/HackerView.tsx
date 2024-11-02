"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui";
import { InteractiveTerminal } from "@/elements";
import { useGlobal } from "@/components/providers/global-provider/global-provider";
import { motion } from "framer-motion";

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
      <DialogTitle id="hacker-view-title" className="sr-only">Hacker View</DialogTitle>
      <DialogContent 
        className="max-w-full min-h-[100dvh] h-[100dvh] flex flex-col p-0 gap-0 bg-black overflow-hidden" 
        aria-describedby="hacker-view-title"
      >
        <motion.div
          className="flex flex-col h-full w-full"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ 
            type: "spring",
            damping: 30,
            stiffness: 300,
          }}
        >
            <div className="flex-1 p-4 overflow-y-auto">
                <InteractiveTerminal />
            </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default HackerView;