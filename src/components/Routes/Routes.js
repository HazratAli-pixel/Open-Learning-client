import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Course from "../Course/Course";
import CourseCart from "../CourseDetails/CourseCart";
import CourseDetails from "../CourseDetails/CourseDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Profile from "../Profile/Profile";
import Privateroute from "../Routes/Privateroute";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import BundleDetails from "../Topics/BundleDetails";

export const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            },
            {
                path:'signin',
                element:<Signin></Signin>
            },
            {
                path:'courses',
                element:<Course></Course>,
                children:[
                    {
                        path:'',
                        loader: async () => {return fetch('http://localhost:4000/course/')},
                        element:<CourseCart></CourseCart>
                    },
                    {
                        path:':id',
                        loader: async ({params}) => {
                            return fetch(`http://localhost:4000/course/${params.id}`)
                        },
                        element: <CourseDetails></CourseDetails>
                    },
                ]
            },
            {
                path:'faq',
                element:<div>faq</div>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'checkout',
                element:<Privateroute><Checkout></Checkout></Privateroute>
            },
            {
                path:'bundle/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:4000/bundle/${params.id}`)
                },
                element:<BundleDetails></BundleDetails>
            },           
            {
                path:'profile',
                element: <Privateroute><Profile></Profile></Privateroute>,
            },
        ]
    },
]);