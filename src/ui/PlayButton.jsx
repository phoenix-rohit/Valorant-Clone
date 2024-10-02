function PlayButton({ children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="tracking-widest font-bold inline-block text-black uppercase font-montserrat bg-gradient-to-r from-[#FF3442] to-[#FF7964] hover:bg-gradient-to-l hover:from-[#ff3442] hover:to-[#ff7964] hover:text-white duration-300 px-4 py-2 rounded-xl"
      >
        {children}
      </button>
    </>
  );
}

export default PlayButton;
// from FF3442
// to FF7964
