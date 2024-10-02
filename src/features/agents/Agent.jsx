import { Link } from "react-router-dom";

function Agent({ agent }) {
  return (
    <Link to={`/agent/${agent.uuid}`}>
      <li>
        <div className="bg-[#19222D]">
          <div className={"bg-valo bg-center overflow-hidden"}>
            <div className="msm:h-[30rem] h-[20rem]  bg-gradient-to-b from-[rgba(15,25,35,0.46)] to-[rgba(61,69,78,0.43)]  msm:scale-[2.5] scale-150 hover:scale-[1.7] duration-300 msm:hover:scale-[2.8]">
              <img
                className="translate-y-4 msm:translate-y-32"
                src={agent.fullPortrait}
                alt={agent.displayName}
              />
            </div>
          </div>
          <p className="px-4 py-1 text-2xl font-semibold text-black uppercase bg-white font-oswald">
            {agent.displayName}
          </p>
        </div>
      </li>
    </Link>
  );
}

export default Agent;
