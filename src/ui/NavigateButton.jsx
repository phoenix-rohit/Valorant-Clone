import { useNavigate } from "react-router-dom";

function NavigateButton({ onMenu, children, navigateTo }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(navigateTo);
        onMenu();
      }}
      className="ml-4 px-3 p-2 hover:text-ui-red hover:bg-[#333] duration-300 text-lg font-semibold tracking-widest text-left uppercase rounded-xl "
    >
      {children}
    </button>
  );
}

export default NavigateButton;
