import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "../../ui/Loader";
import Abilities from "./Abilities";
import { motion } from "framer-motion";
import ConnectionError from "../../ui/ConnectionError";

async function fetchAgent(id) {
  const res = await fetch(`https://valorant-api.com/v1/agents/${id}`);
  const data = await res.json();

  return data;
}

function SingleAgentPage() {
  const { id } = useParams();

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["agents", id],
    queryFn: () => fetchAgent(id),
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ConnectionError error={error} />;
  }

  const agent = { ...data.data };

  return (
    <div className="bg-[#0F1923] pb-12">
      {/* 1st */}

      <div className="z-10 bg-gradient-to-tr from-[#111] to-[#132538]">
        <div
          className={
            "bg-valo lg:bg-fixed bg-center overflow-hidden relative lg:h-[90vh] msm:h-96 h-56"
          }
        >
          <div className="">
            <img
              src={agent.fullPortrait}
              alt={agent.displayName}
              className="absolute scale-150 translate-x-[15%] md:scale-120 md:translate-y-[10%] translate-y-[10%]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 hidden max-w-2xl p-8 lg:block"
          >
            <motion.p className="my-10 italic font-bold tracking-tighter uppercase text-9xl font-oswald">
              {agent.displayName}
            </motion.p>
            <p className="text-sm leading-6 font-montserrat">
              {agent.description}
            </p>
            <div className="inline-block px-8 py-4 my-10 border-2 border-ui-red">
              <div className="flex flex-col items-center justify-center">
                <img className="w-10" src={agent.role.displayIcon} />
                <p className="px-2 pt-2 text-sm text-center uppercase">Role</p>
                <p className="p-2 text-sm tracking-wide text-center uppercase text-ui-red">
                  {agent.role.displayName}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="border border-ui-red"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl p-8 lg:hidden"
      >
        <p className="my-10 text-6xl italic font-bold tracking-tighter uppercase font-oswald">
          {agent.displayName}
        </p>
        <p className="text-sm leading-6 font-montserrat">{agent.description}</p>
        <div className="inline-block px-8 py-4 my-10 border-2 border-ui-red">
          <div className="flex flex-col items-center justify-center">
            <img className="w-10" src={agent.role.displayIcon} />
            <p className="px-2 pt-2 text-sm text-center uppercase">Role</p>
            <p className="p-2 text-sm tracking-wide text-center uppercase text-ui-red">
              {agent.role.displayName}
            </p>
          </div>
        </div>
        <div className="mt-12 border border-ui-red"></div>
      </motion.div>

      {/* 2nd */}
      <div className="max-w-5xl p-8 mx-auto sm:h-[30rem] h-[35rem] ">
        <div className="flex gap-6 md:flex-col">
          <div className="flex flex-col">
            <p className="my-10 text-6xl italic font-semibold tracking-tight uppercase text-ui-red font-oswald">
              Special Abilities
            </p>
            <Abilities abilities={agent.abilities} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleAgentPage;
