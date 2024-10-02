import { motion } from "framer-motion";

function Role({ imagePath, role, description }) {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      whileInView={{ translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.85,

        ease: "easeOut",
      }}
      className="flex flex-col items-center max-w-xs gap-4 "
    >
      <img className="w-full h-84" src={imagePath} alt={role} />
      <div className="space-y-2 ">
        <p className="font-bold tracking-wider text-center uppercase text-md">
          {role}
        </p>
        <p className="p-1 text-xs ">{description}</p>
      </div>
    </motion.div>
  );
}

export default Role;
