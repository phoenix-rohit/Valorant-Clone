import { useQuery } from "@tanstack/react-query";
import MapList from "./MapList";
import { motion } from "framer-motion";
import Loader from "../../ui/Loader";
import ConnectionError from "../../ui/ConnectionError";

async function fetchMaps() {
  const res = await fetch("https://valorant-api.com/v1/maps");
  const data = await res.json();
  return data;
}

function Maps() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["maps"],
    queryFn: fetchMaps,
    staleTime: 60000,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ConnectionError error={error} />;
  }

  const uniquerFilterArray = [
    ...new Map(data.data.map((item) => [item["displayName"], item])).values(),
  ].filter(
    (map) =>
      !(map.displayName === "Basic Training" || map.displayName === "The Range")
  );

  return (
    <div className="pt-12 pb-24 text-black bg-center bg-valo-white">
      <motion.div
        initial={{ translateY: "100%" }}
        transition={{ ease: "easeOut", duration: 0.65 }}
        whileInView={{ translateY: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-start h-12 px-12 font-semibold tracking-tight uppercase text-7xl font-oswald"
      >
        <p>Maps</p>
      </motion.div>
      <MapList maps={uniquerFilterArray} />
    </div>
  );
}

export default Maps;
