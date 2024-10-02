import { useState } from "react";
import { motion } from "framer-motion";

function MapList({ maps }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMap, setCurrentMap] = useState(maps[0]);

  function handleCurrentMap(map, idx) {
    setCurrentMap(map);
    setCurrentIndex(idx);
  }

  function handleDecreaseButton() {
    if (currentIndex > 0) {
      setCurrentIndex((cur) => cur - 1);
      setCurrentMap(maps[currentIndex - 1]);
    }
  }
  function handleIncreaseButton() {
    if (currentIndex < maps.length - 1) {
      setCurrentIndex((cur) => cur + 1);
      setCurrentMap(maps[currentIndex + 1]);
    }
  }

  return (
    <div className="grid grid-cols-1 items-center lg:grid-cols-[6fr_9fr] gap-10 m-12 ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          // duration: 2,

          stiffness: 80,
          // less damping more bouncy
          damping: 10,
        }}
        viewport={{ once: true }}
        className="flex flex-col order-2 gap-5 lg:order-1"
      >
        <div className="order-2 bg-center lg:order-1 bg-valo-white">
          <div className="grid grid-cols-5 gap-5 p-2 overflow-hidden">
            {maps.map((map, idx) => (
              <motion.img
                onClick={() => handleCurrentMap(map, idx)}
                key={map.uuid}
                className={`${
                  currentMap.displayName === map.displayName
                    ? `border-2 bg-black border-ui-red`
                    : `border-2 border-ui-red`
                } lg:w-32 w-24 hover:bg-ui-red  hover:scale-105 cursor-pointer duration-150 hover:border-ui-gray `}
                src={map.displayIcon}
              />
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="inline-block p-2 my-3 text-3xl uppercase -skew-x-12 bg-black text-ui-red font-oswald">
            {currentMap.displayName}
          </p>
          <p className="text-xs md:text-sm">
            A mysterious structure housing an astral conduit radiates with
            ancient power named
            <span className="font-bold text-ui-red">
              {` ${currentMap.displayName}`}
            </span>
            . Great stone doors provide a variety of movement opportunities and
            unlock the paths to three mysterious sites.
            <span className="font-bold text-ui-red">
              {` ${
                currentMap.tacticalDescription !== null
                  ? currentMap.tacticalDescription
                  : ``
              }`}
            </span>
          </p>
        </div>
      </motion.div>
      <div className="relative order-1 overflow-hidden lg:order-2">
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            // duration: 2,

            stiffness: 100,
            // less damping more bouncy
            damping: 5,
          }}
          viewport={{ once: true }}
          className="duration-150 border rounded-sm hover:scale-105 border-ui-red"
          src={currentMap.splash}
        />
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center grid-rows-1 my-5 px-5">
          <div className="border-b-4 rounded-md border-ui-red"></div>
          <div className="flex gap-2">
            <button
              onClick={handleDecreaseButton}
              className="flex items-center justify-center bg-ui-gray "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-12 stroke-ui-red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleIncreaseButton}
              className="flex items-center justify-center bg-ui-gray"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-12 stroke-ui-red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapList;
