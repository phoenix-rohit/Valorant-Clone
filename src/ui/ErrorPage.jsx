import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center h-screen uppercase bg-center bg-valo-white bg-not-found bg-ui-rich-black text-sora font-sora ">
        <div className="flex flex-col items-center justify-center group text-ui-red">
          <p className="text-red-600 -skew-x-12 flex items-center   md:text-[10rem] text-9xl">
            404
          </p>
          <p className="my-10 text-2xl -skew-x-12 msm:text-3xl ">
            Page not found
          </p>
          <div>
            <button
              className="p-2 text-lg font-medium tracking-wider text-gray-600 underline uppercase transition-all duration-300 -skew-x-12 decoration-ui-red hover:text-ui-red hover:bg-ui-rich-black"
              onClick={() => navigate("/")}
            >
              &larr; Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
