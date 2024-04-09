import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Root from "../Layout/Root";
import Contact from '../pages/Contact'
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from '../routes/PrivateRoute';
import About from "../pages/About";
import ErrorPage from "../ErrorPage/ErrorPage";
import ProperticeDetails from "../pages/ProperticeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
                
            },  
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/propertices/:id',
                element: <PrivateRoute><ProperticeDetails></ProperticeDetails></PrivateRoute>,
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }
        ]
    }    
]);

export default router;