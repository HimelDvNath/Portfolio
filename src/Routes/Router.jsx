import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home";
import Hero from "../Pages/Hero";

const router = createBrowserRouter([
    {
        path:'/',
        Component: Home,
        
    }
]);

export default router;