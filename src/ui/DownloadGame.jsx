import { NavLink } from "react-router-dom";
import ValorantSvg from "./ValorantSvg";
import { motion } from "framer-motion";

function DownloadGame() {
  return (
    <div className="relative h-screen overflow-hidden bg-center bg-no-repeat md:bg-cover bg-valo-download">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="flex flex-col items-center gap-5">
          <div className="mb-3">
            <div className="flex flex-col items-center mb-2 ">
              <ValorantSvg fill={"#ff4654"} />
            </div>
            <h3 className="text-4xl text-[#fff] font-bold tracking-tighter text-center uppercase lg:text-6xl font-oswald">
              Choose Your Platform
            </h3>
          </div>
          <div className="text-center">
            <p className="max-w-xl mx-auto mb-3 text-sm font-medium text-center font-montserrat">
              VALORANT is free to play on multiple platforms Download the
              ultimate 5v5 character-based tactical shooter below. Available on
              PC, Xbox Series X|S, and PlayStation 5.
            </p>
          </div>

          <motion.div
            initial={{ translateY: "-200%" }}
            whileInView={{ translateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              damping: 10,
              type: "spring",
              ease: "easeOut",
            }}
            className="flex flex-col items-center gap-4 lg:flex-row"
          >
            <a
              href="https://www.xbox.com/en-GB/games/store/valorant/9N1NLJK9SKRN"
              target="_blank"
              className="px-10 py-4 text-lg text-center text-white uppercase duration-500 cursor-pointer lg:w-44 w-80 group lg:px-12 bg-ui-red hover:bg-white"
            >
              <span className="flex items-center justify-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 duration-500 group-hover:fill-ui-gray fill-white"
                >
                  <path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7 .1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z" />
                </svg>
                <span className="font-medium duration-500 text-md group-hover:text-ui-gray">
                  Xbox
                </span>
              </span>
            </a>
            <a
              href="https://store.playstation.com/en-gb/concept/10010048/"
              target="_blank"
              className="px-10 py-4 text-lg text-center text-white uppercase duration-500 cursor-pointer lg:w-44 w-80 group lg:px-12 bg-ui-red hover:bg-white"
            >
              <span className="flex items-center justify-center gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-8 h-8 duration-500 group-hover:fill-ui-gray fill-white"
                >
                  <path d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9 .6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z" />
                </svg>
                <span className="font-medium duration-500 text-md group-hover:text-ui-gray">
                  PS
                </span>
              </span>
            </a>
            <a
              href="https://playvalorant.com/en-gb/download"
              target="_blank"
              className="py-4 text-lg text-center text-white uppercase duration-500 cursor-pointer lg:w-44 lg:px-12 w-80 group bg-ui-red hover:bg-white"
            >
              <span className="flex items-center justify-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="w-6 h-6 duration-500 group-hover:fill-ui-gray fill-white"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" />
                </svg>
                <span className="font-medium duration-500 text-md group-hover:text-ui-gray">
                  PC
                </span>
              </span>
            </a>
          </motion.div>

          <div className="flex flex-col items-center gap-y-2">
            <p className="max-w-lg text-sm font-medium text-center font-montserrat">
              You’ll need a Riot Account to log in and play. Don’t have one?
            </p>
            <div className="text-sm font-semibold tracking-tight underline uppercase decoration-ui-red font-montserrat">
              <NavLink to="/create-account">Create a riot account</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadGame;
