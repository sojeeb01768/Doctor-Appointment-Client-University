import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Consultation from "../../Pages/Consultation/Consultation";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import DoctorsDetails from "../../Pages/DoctorsDetails/DoctorsDetails";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Specialist from "../../Pages/Specialist/Specialist";
import Specialities from "../../Pages/Specialities/Specialities";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

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
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path: '/specialist/:id',
                element: <Specialist></Specialist>,
                loader: ({ params }) => fetch(`http://localhost:5000/consult/${params.id}`)

            },
            {
                path: '/specialities',
                element: <Specialities></Specialities>
            },

            {
                path: '/doctorsDetails/:id',
                element: <DoctorsDetails></DoctorsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/doctor-details/${params.id}`)

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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            }
        ]
    }
])
export default router;