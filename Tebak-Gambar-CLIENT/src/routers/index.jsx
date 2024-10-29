import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Roompage from "../pages/Roompage";
import Quiz from "../pages/Quiz";
import LandingPage from "../pages/Landing";
import HomePage from "../pages/Homepage";
import Leaderboard from "../pages/Leaderboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "homepage",
    element: <HomePage />,
  },
  {
    path: "room",
    element: <Roompage />,
  },
  {
    path: "quiz",
    element: <Quiz />,
  },
  {
    path : "leaderboard",
    element:<Leaderboard/>
  }
]);
// acuan sini
