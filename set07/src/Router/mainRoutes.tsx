import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Auth/HomeScreen";


export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element : <HomeScreen/>
    }
])