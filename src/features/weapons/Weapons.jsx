import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Loader from "../../ui/Loader";
import ConnectionError from "../../ui/ConnectionError";

async function fetchAgents() {
  const res = await fetch("https://valorant-api.com/v1/weapons");

  const data = await res.json();
  return data;
}

// to filter by category
function trimString(str) {
  const [, category] = str.split("::");
  return category;
}

// api doesnt have weapons description
function calcStatement(category) {
  switch (category.toLowerCase()) {
    case "rifle":
      return "This accurate powerhous is ferocious in small burts.";
    case "shotgun":
      return "Automatic, rapid fire shotgun that provides sustained high damage.";
    case "sidearm":
      return "Surprise your enemy up close for max effectiveness.";
    case "heavy":
      return "Wielding this hammer of a machine threatens glory for the holder and ruin for the foe.";
    case "sniper":
      return "Get cozy and you can control important ground.";
    case "smg":
      return "Automatic, rapid fire that provides sustained high damage.";
    case "melee":
      return "An intimate solution.";
    default:
      return "Lorem guns be with us";
  }
}

function Weapons() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["weapons"],
    queryFn: fetchAgents,
    staleTime: 60000,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ConnectionError error={error} />;
  }

  return (
    <div className="">
      <div className="relative px-10 pt-24 pb-12 text-[#fff] bg-fixed bg-center lg:px-36 bg-dark-valo-bg">
        <div className="">
          <motion.div
            initial={{ translateX: "100%", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="h-24 my-5 text-5xl font-medium tracking-wide uppercase md:text-6xl font-oswald"
          >
            Choose Your weapon
          </motion.div>
          <div className="">
            <div className="grid gap-10 msm:grid-cols-2 lg:grid-cols-3">
              {data.data.map((weapon) => (
                <div
                  key={weapon.uuid}
                  className="font-sans transition-all border-2 border-ui-red group"
                >
                  <div className="flex flex-col items-center justify-around max-w-full duration-300 bg-contain h-52 group-hover:bg-dark-valo-bg bg-white-valo-bg ">
                    <div
                      className={` ${
                        trimString(weapon.category) === "Sidearm" ||
                        trimString(weapon.category) === "Melee"
                          ? `w-1/2 mx-auto `
                          : `w-full mx-auto`
                      }  `}
                    >
                      <img src={weapon.displayIcon} alt={weapon.displayName} />
                    </div>
                  </div>
                  <div className="p-4 px-8 font-medium duration-300 bg-ui-rich-black group-hover:text-ui-rich-black group-hover:bg-white">
                    <p className="text-2xl italic font-bold uppercase text-ui-red">
                      {weapon.displayName}
                    </p>
                    <div className="py-4 space-y-2 text-sm ">
                      <p className="">
                        Types //{" "}
                        <span className="font-bold tracking-wider uppercase text-ui-red">
                          {trimString(weapon.category)}
                        </span>
                      </p>
                      <p className="">
                        {calcStatement(trimString(weapon.category))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weapons;

//// SPLITED EEquippableCategory::Rifle" String to cateogrize
