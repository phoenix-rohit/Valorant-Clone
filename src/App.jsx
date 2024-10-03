import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Home = lazy(() => import("./ui/Home"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const DownloadGame = lazy(() => import("./ui/DownloadGame"));
const ErrorPage = lazy(() => import("./ui/ErrorPage"));
const Agents = lazy(() => import("./features/agents/Agents"));
const SingleAgentPage = lazy(() => import("./features/agents/SingleAgentPage"));
const Maps = lazy(() => import("./features/maps/Maps"));
const Weapons = lazy(() => import("./features/weapons/Weapons"));
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
