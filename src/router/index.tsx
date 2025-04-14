import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../app/layout/MainLayout";
import AnimePage from "../app/pages/AnimePage";
import SearchPage from "../app/pages/SearchPage";
import WatchlistPage from "../app/pages/WatchlistPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
      },
      {
        path: "/watchlist",
        element: <WatchlistPage />,
      },
      {
        path: "/anime/:id",
        element: <AnimePage />,
      },
    ],
  },
]);
