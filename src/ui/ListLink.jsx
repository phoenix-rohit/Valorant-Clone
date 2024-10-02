import { NavLink } from "react-router-dom";

function ListLink({ children, to }) {
  return (
    <div className="flex flex-col gap-2 pt-1 group">
      <NavLink
        to={to}
        className={`p-2 transition-all duration-300 rounded-lg group-hover:bg-[#444] active:text-ui-red `}
      >
        {children}
      </NavLink>
      <div className="transition-all duration-300 border-b-4 border-transparent rounded-md group-hover:border-ui-red"></div>
    </div>
  );
}

export default ListLink;
