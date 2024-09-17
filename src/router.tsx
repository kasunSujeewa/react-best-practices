import { createBrowserRouter } from "react-router-dom";
import WelcomeScreen from "./page/WelcomeScreen";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomeScreen />
    }
])