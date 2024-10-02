import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Agents from "./features/Agents/Agents";
import Maps from "./features/Maps/Maps";
import Weapons from "./features/weapons/Weapons";
import LeaderBoards from "./features/leaderboards/LeaderBoards";
import ErrorPage from "./ui/ErrorPage";
import Signin from "./features/auth/Signin";
import CreateRiotAccount from "./features/auth/CreateRiotAccount";
import DownloadGame from "./ui/DownloadGame";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SingleAgentPage from "./features/agents/SingleAgentPage";

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
        // leaderboards
        path: "/leaderboards",
        element: <LeaderBoards />,
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
      <RouterProvider router={appRouter} />
    </QueryClientProvider>
  );
}

export default App;
