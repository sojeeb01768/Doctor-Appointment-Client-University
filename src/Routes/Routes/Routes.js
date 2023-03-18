import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Consultation from "../../Pages/Consultation/Consultation";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Specialist from "../../Pages/Specialist/Specialist";
import Specialities from "../../Pages/Specialities/Specialities";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/consultation',
                element: <Consultation></Consultation>
            },
            {
                path: '/specialist',
                element: <Specialist></Specialist>
            },
            {
                path: '/specialities/:id',
                element: <Specialities></Specialities>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])
export default router;