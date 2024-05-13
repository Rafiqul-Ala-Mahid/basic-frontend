import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../../pages/Dashboard";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard></Dashboard>
                    </PrivateRoute>
                )
            }
        ]
    }
])

export default router