import { useNavigate } from "react-router-dom";

function ConnectionError({ error }) {
  const navigate = useNavigate();
  console.log(error.message);

  return (
    <>
      <div className="bg-valo">
        <div className="relative h-screen bg-center bg-no-repeat bg-connection-errror-bg">
          <div className="absolute text-center rounded-sm -translate-x-1/2 -translate-y-1/2 w-96  msm:w-[30rem] msm:px-16 px-12 py-24 msm:py-16 left-1/2 top-1/2 bg-[#19222dee] border-b-2 border-ui-red ">
            <div className="space-y-12 max-w-7xl">
              <h3 className="text-xl font-semibold tracking-widest uppercase lg:text-2xl text-ui-red font-montserrat">
                Connection Error
              </h3>
              <p className="text-sm font-montserrat ">
                Failed to fetch data from server
              </p>
              <div className="flex flex-col items-center justify-between gap-3 text-sm font-semibold msm:flex-row">
                <button
                  className="uppercase hover:text-ui-rich-black duration-300 hover:bg-white bg-[#ff4656] font-montserrat w-36 p-2"
                  onClick={() => navigate("/")}
                >
                  Back to home
                </button>

                <button
                  className="uppercase hover:text-ui-rich-black duration-300 hover:bg-white bg-[#ff4656] font-montserrat w-36 p-2"
                  // to refresh
                  onClick={() => navigate(0)}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectionError;
