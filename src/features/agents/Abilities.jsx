import { useState } from "react";

function Abilities({ abilities }) {
  const [curAbility, setCurAbility] = useState(abilities[0]);

  return (
    <>
      <div className="flex gap-6">
        {abilities.map((ability, idx) => (
          <div
            className={`${
              curAbility.slot === ability.slot
                ? "bg-black scale-105 duration-500 border-ui-red border"
                : "bg-[#25333fa9]"
            } cursor-pointer overflow-hidden rounded-sm`}
            key={ability.displayName}
            onClick={() => setCurAbility(abilities[idx])}
          >
            <img
              className="w-24 duration-300 hover:scale-105"
              src={ability.displayIcon}
              alt={ability.displayName}
            />
          </div>
        ))}
      </div>

      <p className="mt-12 mb-6 text-2xl italic font-semibold uppercase text-ui-red">
        {curAbility.displayName}
      </p>
      <p className="text-sm font-montserrat">{curAbility.description}</p>
    </>
  );
}

export default Abilities;

{
  /* slot 
displayName
displayIcon
description */
}
