import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Consultation from "../../Pages/Consultation/Consultation";
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
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AddDoctor from "../../Pages/DashBoard/AddDoctor/AddDoctor";
import MyPatient from "../../Pages/DashBoard/MyPatient/MyPatient";
import DoctorRoute from "../DoctorRoute/DoctorRoute";
import ManageDoctors from "../../Pages/DashBoard/ManageDoctors/ManageDoctors";
import Prescription from "../../Pages/DashBoard/Prescription/Prescription";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
                path: '/appointment',
                element: <Appointment></Appointment>
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/patient',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/adddoctor',
                element: <DoctorRoute><AddDoctor></AddDoctor></DoctorRoute>
            },
            {
                path: '/dashboard/mypatient',
                element: <DoctorRoute><MyPatient></MyPatient></DoctorRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/prescription',
                element: <DoctorRoute><Prescription></Prescription></DoctorRoute>
            },

            {
                path: '/dashboard/allusers',
                element:
                    <AdminRoute>
                        <AllUsers></AllUsers>
                    </AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }

        ]
    }
])
export default router;