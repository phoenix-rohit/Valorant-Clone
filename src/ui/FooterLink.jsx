import { Link } from "react-router-dom";

function FooterLink({ children, to, type }) {
  if (type === "simple") {
    return (
      <div className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase duration-300 rounded-lg font-montserrat hover:bg-stone-700">
        {children}
      </div>
    );
  }

  return (
    <div className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase duration-300 rounded-lg font-montserrat hover:bg-stone-700">
      <Link to={to}>{children}</Link>
    </div>
  );
}

export default FooterLink;
