import { PropagateLoader } from "react-spinners";

function Loader() {
  return (
    <>
      <div className="bg-[#131025]">
        <div className="relative h-[90dvh] bg-no-repeat bg-center bg-loading">
          <div className="absolute px-12 bottom-[21%]">
            <p className="my-2 text-3xl tracking-wider uppercase md:text-4xl text-ui-red font-montserrat">
              Loading
            </p>
          </div>
          <div className="absolute bg-gradient-to-t md:px-32 px-28 bottom-[21%]">
            {<PropagateLoader /> ? (
              <PropagateLoader color="#FF4654" size={"1.2rem"} />
            ) : (
              <p>......</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
