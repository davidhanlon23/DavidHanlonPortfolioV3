"use client"
import { motion } from 'framer-motion';

const DirectionToggle = ({
    isLong, 
    setIsLong,
  } : { 
    isLong: boolean, 
    setIsLong: (isLong: boolean) => void 
  }) => {
      return (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Position Direction
          </h3>
          <div className="relative w-full max-w-[300px] h-14 mx-auto bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
            <motion.div 
              className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white dark:bg-gray-700 rounded-md shadow-lg"
              initial={false}
              animate={{
                x: isLong ? '4px' : 'calc(100% + 4px)',
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <div className="relative flex h-full">
              <button
                type="button"
                onClick={() => setIsLong(true)}
                className={`flex-1 flex items-center justify-center rounded-md font-medium transition-colors ${
                  isLong 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <span className="mr-2">🚀</span>
                Long
              </button>
              <button
                type="button"
                onClick={() => setIsLong(false)}
                className={`flex-1 flex items-center justify-center rounded-md font-medium transition-colors ${
                  !isLong 
                    ? 'text-red-600 dark:text-red-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <span className="mr-2">🔻</span>
                Short
              </button>
            </div>
          </div>
        </div>
      );
    };

export default DirectionToggle;