import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ValorantSvg from "./ValorantSvg";
import Role from "./Role";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidden">
        {/* best way to cover any video to full screen */}
        <div className="relative md:h-screen h-[90dvh]">
          <div className="absolute top-0 left-0 object-cover w-full h-full">
            <video
              className="object-cover w-full h-full "
              autoPlay
              loop
              muted
              poster="/dark-valo-bg.jpg"
            >
              <source src="/valorant-hero-1.mp4" />
            </video>
          </div>
          <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 w-[30rem] top-[45%] left-[52%] md:left-[51%]">
            <div className="flex flex-col items-center space-y-6 font-montserrat">
              <p className="text-lg font-semibold md:text-xl">
                A 5v5 character-based tactical shooter
              </p>
              <motion.div className="mx-auto max-w-96">
                <ValorantSvg fill="#ff4656" />
              </motion.div>
              <div className="border border-white ">
                <motion.button
                  onClick={() => navigate("/download")}
                  className="uppercase hover:text-ui-rich-black text-sm m-1 duration-300 hover:bg-white tracking-wide font-bold bg-[#ff4656] font-montserrat p-4 "
                >
                  Play for free
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* WE ARE  */}
        <div className="">
          <div className="relative z-10 p-4 py-16 bg-center bg-cover bg-map-1-bg">
            <div className="grid items-center gap-3 gap-y-4 my-10 lg:grid-cols-[4fr_6fr]">
              <motion.div
                initial={{ translateX: "100%" }}
                whileInView={{ translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="max-w-xl px-8 text-ui-rich-black space-y-7"
              >
                <motion.p className="text-6xl font-bold tracking-tighter uppercase lg:text-8xl font-oswald">
                  we are valorant
                </motion.p>
                <div className="z-10 space-y-2">
                  <p className="font-semibold uppercase">defy the limits</p>
                  <p className="text-xs font-medium leading-6 md:text-sm">
                    Blend your style and experience on a global, competitive
                    stage. You have 13 rounds to attack and defend your side
                    using sharp gunplay and tactical abilities. And, with one
                    life per-round, think faster than your opponent if you want
                    to survive. Take on foes across Competitive and Unranked
                    modes as well as Deathmatch and Spike Rush.
                  </p>
                </div>
                <div className="inline-block p-1 border border-white">
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    className="px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase duration-300 hover:scale-110 hover:bg-ui-rich-black bg-ui-red"
                    onClick={() => navigate("/create-account")}
                  >
                    learn the game
                  </motion.button>
                </div>
              </motion.div>
              <div className="z-20 h-[30rem]">
                <video
                  className="object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                  poster="/dark-valo-bg.jpg"
                >
                  <source src="/valorant_hero_2.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* CONSOLE LAUNCH */}
        <div className="relative bg-center bg-cover lg:h-[90dvh] h-[75dvh] bg-home-2">
          <motion.div className="absolute left-0 max-w-md px-4 mx-5 text-white msm:px-12 md:top-[20%] top-[43%] ">
            <motion.p
              initial={{ translateY: "200%", opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: "easeOut", duration: 0.65 }}
              className="mb-6 text-5xl font-bold tracking-tighter uppercase md:text-7xl lg:text-8xl font-oswald"
            >
              Console launch
            </motion.p>
            <p className="font-medium uppercase ">
              Valorant{" "}
              <span className="italic font-bold msm:text-ui-rich-black text-ui-red">
                / YR 4 /
              </span>
            </p>
            <div className="inline-block my-2 border-b-4 border-l-4 group border-b-ui-rich-black">
              <button
                onClick={() => navigate("/download")}
                className="p-3 transition-all duration-300 group-hover:bg-white group-hover:text-black bg-[#FF4654] font-semibold text-md uppercase font-sans"
              >
                Play now
              </button>
            </div>
          </motion.div>
        </div>
        {/* ROLE */}
        <div className="px-10 py-24 text-center bg-center bg-contain sm:px-16 bg-matrix-bg">
          <motion.p
            initial={{ translateX: "100%" }}
            whileInView={{ translateX: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,

              ease: "easeOut",
            }}
            className="mb-16 text-4xl font-semibold text-white uppercase msm:text-6xl font-oswald"
          >
            FInd your role
          </motion.p>
          <div className="grid grid-cols-2 gap-6 mx-auto lg:grid-cols-4">
            <Role
              imagePath={"/duelist-jett.jpg"}
              role={"duelist"}
              description={
                "Be on and out front, opening up rounds with aggressive abilities."
              }
            />
            <Role
              imagePath={"/controller-viper.jpg"}
              role={"controller"}
              description={
                "Stand ground with tools like vision blocking smokes, temporary walls, and traps."
              }
            />
            <Role
              imagePath={"/sentinal-kj.jpg"}
              role={"sentinal"}
              description={
                "Draw your lines, and defend your turf with long range, supportive, and defensive abilities."
              }
            />
            <Role
              imagePath={"/initiator-gekko.jpg"}
              role={"initiator"}
              description={
                "Track, disable, and flush out your enemies with dynamic abilities."
              }
            />
          </div>
        </div>
        {/* View Agents */}
        <div className="">
          <div className="relative z-10 p-2 bg-center bg-cover bg-agent-1-bg">
            <div className="grid items-center grid-cols-1 gap-5 my-10 lg:grid-cols-2 ">
              <motion.div
                initial={{ translateX: "100%" }}
                whileInView={{ translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="order-1 max-w-xl px-8 lg:order-2 space-y-7"
              >
                <motion.p className="text-6xl font-bold tracking-tighter text-white uppercase lg:text-8xl font-oswald">
                  your agents
                </motion.p>
                <div className="z-10 space-y-2">
                  <p className="font-semibold uppercase">
                    creativity is your greatest weapon.
                  </p>
                  <p className="text-xs font-medium leading-6 md:text-sm">
                    More than guns and bullets, you’ll choose an Agent armed
                    with adaptive, swift, and lethal abilities that create
                    opportunities to let your gunplay shine. No two Agents play
                    alike, just as no two highlight reels will look the same.
                  </p>
                </div>
                <div className="inline-block p-1 border border-white">
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    className="px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase duration-300 hover:scale-110 hover:bg-white hover:text-ui-rich-black bg-ui-rich-black"
                    onClick={() => navigate("/agents")}
                  >
                    View all agents
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                initial={{ translateX: "-100%" }}
                whileInView={{ translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="order-2 p-10 lg:order-1"
              >
                <img
                  className="scale-110"
                  src="/agents-bg-2.png"
                  alt="reyna-raze-image"
                />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Maps */}
        <div className="">
          <div className="relative z-10 p-2 bg-center bg-cover bg-map-1-bg">
            <div className="grid items-center grid-cols-1 gap-5 my-10 lg:mx-10 lg:grid-cols-2 ">
              <motion.div
                initial={{ translateX: "100%" }}
                whileInView={{ translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="max-w-xl px-8 text-ui-rich-black space-y-7"
              >
                <motion.p className="text-6xl font-bold tracking-tighter uppercase lg:text-8xl font-oswald">
                  your Maps
                </motion.p>
                <div className="z-10 space-y-2">
                  <p className="font-semibold uppercase">
                    FIGHT AROUND THE WORLD
                  </p>
                  <p className="text-xs font-medium leading-6 md:text-sm">
                    Each map is a playground to showcase your creative thinking.
                    Purpose-built for team strategies, spectacular plays, and
                    clutch moments. Make the play others will imitate for years
                    to come..
                  </p>
                </div>
                <div className="inline-block p-1 border border-white">
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    className="px-8 py-4 text-sm font-semibold tracking-wide text-white uppercase duration-300 hover:scale-110 hover:bg-ui-rich-black bg-ui-red"
                    onClick={() => navigate("/maps")}
                  >
                    View all maps
                  </motion.button>
                </div>
              </motion.div>
              <motion.div
                initial={{ translateX: "-100%" }}
                whileInView={{ translateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="p-10"
              >
                <img
                  className="mx-auto scale-125"
                  src="/maps-2-rm.png"
                  alt="maps-bg-image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
