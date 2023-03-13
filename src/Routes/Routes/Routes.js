import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Consultation from "../../Pages/Consultation/Consultation";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Specialist from "../../Pages/Specialist/Specialist";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/consultation',
                element:<Consultation></Consultation>
            },
            {
                path:'/specialist',
                element:<Specialist></Specialist>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    }
])
export default router;