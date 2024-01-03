import './Routes.css'
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/HomePage/Home";
import Chats from "../Pages/Chats/Chats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/chats",
    element: <Chats></Chats>, 
  },

]);
