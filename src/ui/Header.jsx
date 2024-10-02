import { Link, useNavigate } from "react-router-dom";
import ListLink from "./ListLink";
import RiotGamesSvg from "./RiotGamesSvg";
import ValorantIcon from "./ValorantIcon";
import PlayButton from "./PlayButton";
import MenuIcon from "./MenuIcon";
import { motion } from "framer-motion";
import NavigateButton from "./NavigateButton";

function Header({
  isOverlayOpen,
  onOverlay,
  isMenuOpen,
  onMenu,
  onMenuOverlay,
}) {
  const navigate = useNavigate();
  return (
    <>
      <header className="sticky z-20 font-montserrat font-semibold uppercase top-0 lg:px-10 px-8 py-4 text-sm bg-[#111] text-white">
        <nav className="flex items-center justify-between gap-5 ">
          <div className="flex items-center justify-between xl:gap-x-10 lg:gap-x-7 gap-x-6">
            <div className="flex items-center gap-4">
              <Link to="/">
                <RiotGamesSvg
                  fill={"fill-white"}
                  hoverFill={"hover:fill-ui-red"}
                />
              </Link>
              <div>
                <ValorantIcon
                  fill={"fill-ui-red"}
                  // hoverFill={"hover:fill-ui-red"}
                />
              </div>
            </div>

            <div className="hidden mdm:block">
              <ListLink to="/agents">Agents</ListLink>
            </div>
            <div className="hidden mdm:block">
              <ListLink to="/maps">Maps</ListLink>
            </div>
            <div className="hidden mdm:block">
              <ListLink to="/weapons">Asernal</ListLink>
            </div>

            <div className="hidden mdm:block">
              <ListLink to="/download">Download</ListLink>
            </div>
            <div className="hidden lg:block">
              <div className="relative flex flex-col gap-2 pt-1 group">
                <div className="p-2 transition-all duration-300 rounded-lg group-hover:bg-[#444] active:text-ui-red gap-2 flex items-center">
                  <span>Our Socials</span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.033"
                      height="5"
                      className="fill-ui-red "
                    >
                      <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z" />
                    </svg>
                  </span>
                </div>
                <div className="transition-all duration-300 border-b-4 border-transparent rounded-md group-hover:border-ui-red"></div>
                <div className="absolute rounded top-full z-20 hidden text-center bg-[#111] w-44 -translate-x-7 space-y-3 p-4 group group-hover:block">
                  <a
                    className="flex justify-center items-center p-1 rounded duration-200 hover:bg-[#333] hover:text-ui-red w-full"
                    href="https://twitter.com/VALORANTukn"
                    target="_blank"
                  >
                    <span>X</span>
                    <span className="ml-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="flex justify-center items-center p-1 rounded duration-200 hover:bg-[#333] hover:text-ui-red  w-full"
                    href="https://www.youtube.com/@Valorant"
                    target="_blank"
                  >
                    <span>Youtube</span>
                    <span className="ml-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="flex justify-center items-center p-1 rounded duration-200 hover:bg-[#333] hover:text-ui-red  w-full"
                    href="https://instagram.com/valorant"
                    target="_blank"
                  >
                    <span>Instagram</span>
                    <span className="ml-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="flex justify-center items-center p-1 rounded duration-200 hover:bg-[#333] hover:text-ui-red  w-full"
                    href="https://www.facebook.com/playvalorant/"
                    target="_blank"
                  >
                    <span>Facebook</span>
                    <span className="ml-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    className="flex justify-center items-center p-1 rounded duration-200 hover:bg-[#333] hover:text-ui-red  w-full"
                    href="https://discord.gg/valorant"
                    target="_blank"
                  >
                    <span>Discord</span>
                    <span className="ml-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* FIXME Add socials */}
          <div className="hidden pb-3 mdm:block">
            <div onClick={onOverlay}>
              <PlayButton>Play Now</PlayButton>
            </div>
          </div>
          <div className="block mdm:hidden">
            <button onClick={onMenu}>
              <MenuIcon />
            </button>
          </div>
        </nav>
      </header>
      <div className="">
        {isOverlayOpen && (
          <motion.div
            initial={{ translateY: "-50%", translateX: "-50%" }}
            animate={{
              scale: [0, 1.5, 1],
            }}
            transition={{ type: "spring", damping: 10 }}
            className="fixed z-30 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 "
          >
            <div className="relative">
              <div className="flex flex-col gap-10 md:w-[40rem] w-80 text-center text-white p-14 md:p-8 md:h-96 h-[26rem] bg-[#0F1923]">
                <p className="text-3xl font-bold uppercase font-oswald">
                  Get set up to play
                </p>
                <div className="grid grid-cols-1 gap-5 py-1 md:py-20 md:grid-cols-2">
                  <div className="flex flex-col items-center justify-between md:gap-10 gap-y-4">
                    <p className="text-sm">Don&#39;t have a Riot account</p>
                    <button
                      onClick={() => navigate("/create-account")}
                      className="w-full p-4 text-sm font-semibold uppercase duration-300 bg-white hover:bg-ui-red hover:text-white text-ui-rich-black"
                    >
                      Create One
                    </button>
                  </div>
                  <div className="flex flex-col items-center justify-between md:gap-10 gap-y-4">
                    <p className="text-sm">I have a Riot account</p>
                    <button
                      onClick={() => navigate("/signin")}
                      className="w-full p-4 text-sm font-semibold text-white uppercase duration-300 hover:text-ui-gray hover:bg-white bg-ui-red"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={onOverlay}
                animate={{ translateX: "-50%", translateY: "50%" }}
                initial={{ scale: 1.3 }}
                whileHover={{ scale: 1.4, rotate: 180 }}
                className="absolute top-0 right-0 rounded-sm bg-ui-red"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
      {/* Hamburger menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ translateX: "100%", opacity: 0.5 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.75,
          }}
          className="lg:hidden fixed top-0 right-0 z-30 msm:w-[70vw] w-screen h-screen py-16 bg-[#1c1c1c]"
        >
          <div className="flex flex-col p-12 py-16 text-white msm:p-4 msm:py-12 font-montserrat gap-y-4">
            <NavigateButton onMenu={onMenu} navigateTo={"/agents"}>
              Agents
            </NavigateButton>
            <NavigateButton onMenu={onMenu} navigateTo={"/maps"}>
              Maps
            </NavigateButton>
            <NavigateButton onMenu={onMenu} navigateTo={"/weapons"}>
              Asernal
            </NavigateButton>
            <NavigateButton onMenu={onMenu} navigateTo={"/download"}>
              Download
            </NavigateButton>
            <NavigateButton onMenu={onMenu} navigateTo={"/"}>
              Home
            </NavigateButton>

            <PlayButton onClick={onMenuOverlay}>Play Now</PlayButton>
          </div>
          <motion.button
            onClick={onMenu}
            animate={{ translateX: "-100%", translateY: "100%" }}
            initial={{ scale: 1.3 }}
            whileHover={{ scale: 1.4, rotate: 180 }}
            className="absolute top-0 right-[5%] rounded-sm bg-ui-red"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </motion.button>
          <motion.div
            animate={{ translateX: "100%", translateY: "75%" }}
            className="absolute top-0 left-[5%] rounded-sm"
          >
            <ValorantIcon size="size-10" fill={"fill-ui-red"} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
