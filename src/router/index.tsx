import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../app/layout/MainLayout";
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
    ],
  },
]);
