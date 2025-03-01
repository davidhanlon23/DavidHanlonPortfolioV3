const DirectionToggle = ({
    sectionGroupClasses, labelClasses, isLong, setIsLong,
  } : { sectionGroupClasses: string,
    labelClasses: string, isLong:boolean, setIsLong: (isLong:boolean) => void }) => (
      <div id="direction-group" className={sectionGroupClasses}>
        <label className={labelClasses} htmlFor="direction"> Trade Direction </label>
        <div className="flex w-full">
          <button
            type="button"
            name="direction"
            onClick={() => setIsLong(!isLong)}
            className="flex w-full font-bold rounded-lg"
          >
            <div className={`${isLong ? 'bg-green-500 dark:bg-green-700 text-black dark:text-white w-6/12' : 'bg-gray-100 text-black dark:bg-[#121212] dark:text-white w-5/12'} rounded-l-lg py-2`}>
              <p>Long</p>
            </div>
            <div className={`w-1/12 border-solid ${isLong ? 'border-l-green-500 dark:border-l-green-700 border-l-[20px] border-y-transparent border-y-[20px] border-r-0' : 'border-r-red-500 dark:border-r-red-700 border-r-[20px] border-y-transparent border-y-[20px] border-l-0'} bg-gray-100 dark:bg-[#121212]`} />
  
            <div className={`${isLong ? 'bg-gray-100 text-black dark:bg-[#121212] dark:text-white w-5/12' : 'bg-red-500 dark:bg-red-700 text-black dark:text-white w-6/12'} rounded-r-lg py-2`}>
              <p>Short</p>
            </div>
          </button>
        </div>
      </div>
  );
  export default DirectionToggle;