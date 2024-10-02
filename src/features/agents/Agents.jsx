import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ConnectionError from "../../ui/ConnectionError";
import Loader from "../../ui/Loader";
import Agent from "./Agent";

// GET AGENTS

async function fetchAgents() {
  const res = await fetch("https://valorant-api.com/v1/agents");
  const data = await res.json();
  return data;
}

function Agents() {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["agents"],
    queryFn: fetchAgents,
    staleTime: 60000,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ConnectionError error={error} />;
  }

  const filteredData = data.data.filter(
    (player) => player.isPlayableCharacter !== false
  );

  return (
    <motion.div className="bg-[#0F1923] px-10 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.div className="h-[20dvh] relative bg-valo bg-center bg-no-repeat">
          <div className="absolute  text-6xl font-bold tracking-tight uppercase left-[10%] top-[30%] font-oswald ">
            Agents
          </div>
        </motion.div>
        <ul className="grid grid-cols-1 gap-10 msm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
          {filteredData.map((agent) => (
            <Agent key={agent.uuid} agent={agent} />
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Agents;
