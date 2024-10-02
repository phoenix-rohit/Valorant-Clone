import { useState } from "react";
import RiotGamesSvg from "../../ui/RiotGamesSvg";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    setUsername("");
    setPassword("");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-center bg-cover bg-login-1-dark gap-y-10 lg:bg-login-1">
      <div className="mt-16">
        <RiotGamesSvg fill={"fill-white"} hoverFill={"hover:fill-ui-red"} />
      </div>
      <div className="h-[40rem] msm:w-[30rem] w-[25rem] mx-auto ">
        <div className="p-10 font-medium text-black bg-white rounded-sm font-montserrat">
          <div className="my-4 text-2xl font-bold text-center">Sign In</div>
          <form onSubmit={(e) => handleSumbit(e)} className="my-10 space-y-6">
            <div className="flex flex-col gap-y-2">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="relative p-4 rounded outline-none text-md placeholder:text-neutral-500 placeholder:uppercase placeholder:text-xs placeholder:font-semibold focus:bg-slate-100 bg-slate-100 hover:bg-slate-200"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 rounded outline-none text-md placeholder:text-neutral-500 placeholder:uppercase placeholder:text-xs placeholder:font-semibold focus:bg-slate-100 bg-slate-100 hover:bg-slate-200"
                type="text"
                placeholder="password"
              />
            </div>
            {/* icons */}
            <div className="flex items-center justify-center gap-2">
              <button className="flex justify-center w-full px-8 py-2 duration-200 border-2 hover:scale-105 rounded-xl border-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 326667 333333"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="size-7"
                >
                  <path
                    d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                    fill="#4285f4"
                  />
                  <path
                    d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                    fill="#34a853"
                  />
                  <path
                    d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                    fill="#ea4335"
                  />
                </svg>
              </button>

              <button className="flex justify-center w-full px-8 py-2 duration-200 bg-black border-2 hover:scale-105 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 640 640"
                  className="size-7 stroke-white fill-white"
                >
                  <path d="M494.782 340.02c-.803-81.025 66.084-119.907 69.072-121.832-37.595-54.993-96.167-62.552-117.037-63.402-49.843-5.032-97.242 29.362-122.565 29.362-25.253 0-64.277-28.607-105.604-27.85-54.32.803-104.4 31.594-132.403 80.245C29.81 334.457 71.81 479.58 126.816 558.976c26.87 38.882 58.914 82.56 100.997 81 40.512-1.594 55.843-26.244 104.848-26.244 48.993 0 62.753 26.245 105.64 25.406 43.606-.803 71.232-39.638 97.925-78.65 30.887-45.12 43.548-88.75 44.316-90.994-.969-.437-85.029-32.634-85.879-129.439l.118-.035zM414.23 102.178C436.553 75.095 451.636 37.5 447.514-.024c-32.162 1.311-71.163 21.437-94.253 48.485-20.729 24.012-38.836 62.28-33.993 99.036 35.918 2.8 72.591-18.248 94.926-45.272l.036-.047z" />
                </svg>
              </button>
              <button className="flex justify-center w-full px-8 py-2 hover:scale-105 duration-200 border-2 rounded-xl bg-[#107b10]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1331.67 1333.33"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  className="size-7 fill-white"
                >
                  <path
                    d="M665.83 534.66s1.66 0 0 0c200.91 152.76 541.3 528.02 438.35 634.29-117.89 102.95-270.65 164.39-438.35 164.39-167.7 0-322.13-61.44-438.35-164.39-104.61-106.27 237.44-481.53 436.69-632.63 0-1.66 1.66-1.66 1.66-1.66zm347.03-436.7C911.57 36.52 800.32-.01 665.83-.01c-134.5 0-245.74 36.53-347.03 97.97-1.66 0-1.66 1.66-1.66 3.32s1.66 1.66 3.32 1.66c129.51-28.23 325.44 83.02 343.71 94.65h3.32c18.26-11.62 214.2-122.87 343.71-94.65 1.66 0 3.32 0 3.32-1.66s0-3.32-1.66-3.32zm-813.61 92.98c-1.66 0-1.66 1.66-3.32 1.66C74.72 313.81 0 481.52 0 665.82c0 151.1 51.48 292.24 136.16 403.49 0 1.66 1.66 1.66 3.32 1.66s1.66-1.66 0-3.32C88 909.91 348.69 529.67 483.19 370.26l1.66-1.66c0-1.66 0-1.66-1.66-1.66-204.23-202.57-272.31-180.99-283.93-176.01zm649.23 174.35l-1.66 1.66s0 1.66 1.66 1.66C982.98 528.01 1242 908.26 1192.19 1066v3.32c1.66 0 3.32 0 3.32-1.66 84.68-111.25 136.16-252.39 136.16-403.49 0-184.31-74.72-352.01-197.59-473.22-1.66-1.66-1.66-1.66-3.32-1.66-9.96-3.32-78.04-24.91-282.27 176.01z"
                    fill="inherit"
                    fillRule="nonzero"
                  />
                </svg>
              </button>
            </div>

            {/* submit */}
            <div className="flex items-center pt-5">
              <button
                disabled={!username || !password}
                className="flex items-center justify-center w-24 h-24 p-4 mx-auto disabled:bg-slate-200 disabled:cursor-not-allowed rounded-3xl bg-ui-red"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center group">
              <button
                onClick={() => navigate("/create-account")}
                className="text-base font-semibold tracking-wide underline capitalize duration-200 group-hover:text-ui-red font-montserrat decoration-ui-red hover:decoration-black"
              >
                Create Riot Account
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="duration-200 size-4 stroke-black group-hover:stroke-ui-red group-hover:translate-x-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
