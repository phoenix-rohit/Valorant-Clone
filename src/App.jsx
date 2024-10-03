import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = lazy(() => import("./ui/Home"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const DownloadGame = lazy(() => import("./ui/DownloadGame"));
const ErrorPage = lazy(() => import("./ui/ErrorPage"));

// import Home from "./ui/Home";
// import AppLayout from "./ui/AppLayout";
// import DownloadGame from "./ui/DownloadGame";
// import ErrorPage from "./ui/ErrorPage";
// import Agents from "./features/Agents/Agents";
// import SingleAgentPage from "./features/agents/SingleAgentPage";
// import Maps from "./features/Maps/Maps";
// import Weapons from "./features/weapons/Weapons";
// import Signin from "./features/auth/Signin";
// import CreateRiotAccount from "./features/auth/CreateRiotAccount";

const Agents = lazy(() => import("./features/Agents/Agents"));
const SingleAgentPage = lazy(() => import("./features/Agents/SingleAgentPage"));
const Maps = lazy(() => import("./features/Maps/Maps"));
const Weapons = lazy(() => import("./features/Weapons/Weapons"));
const Signin = lazy(() => import("./features/auth/Signin"));
const CreateRiotAccount = lazy(() =>
  import("./features/auth/CreateRiotAccount")
);

import Loader from "./ui/Loader";

const queryClient = new QueryClient();

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // overview/main/home
        path: "/",
        element: <Home />,
      },
      {
        // agents
        path: "/agents",
        element: <Agents />,
      },
      {
        // singleAgent
        path: "/agent/:id",
        element: <SingleAgentPage />,
      },
      {
        // maps
        path: "/maps",
        element: <Maps />,
      },
      {
        // weapons
        path: "/weapons",
        element: <Weapons />,
      },
      {
        // download page
        path: "/download",
        element: <DownloadGame />,
      },
    ],
  },
  {
    element: <Signin />,
    path: "/signin",
    errorElement: <ErrorPage />,
  },
  {
    element: <CreateRiotAccount />,
    path: "/create-account",
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={appRouter} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
