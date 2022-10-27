import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Checkout from "../Checkout/Checkout";
import Course from "../Course/Course";
import CourseCart from "../CourseDetails/CourseCart";
import CourseDetails from "../CourseDetails/CourseDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Freeq from "../Freeq/Freeq";
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
                        loader: async () => {return fetch('https://assignment10-server-sable.vercel.app/course/')},
                        element:<CourseCart></CourseCart>
                    },
                    {
                        path:':id',
                        loader: async ({params}) => {
                            return fetch(`https://assignment10-server-sable.vercel.app/course/${params.id}`)
                        },
                        element: <CourseDetails></CourseDetails>
                    },
                    {
                        path:'checkout/:id',
                        loader: async ({params}) => {
                            return fetch(`https://assignment10-server-sable.vercel.app/course/${params.id}`)
                        },
                        element: <Privateroute><Checkout></Checkout></Privateroute>
                    },
                    {
                        path:'bundle/:id',
                        loader: async ({params}) => {
                            return fetch(`https://assignment10-server-sable.vercel.app/bundle/${params.id}`)
                        },
                        element:<BundleDetails></BundleDetails>
                    },
                ]
            },
            {
                path:'faq',
                element:<Freeq></Freeq>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'checkout/:id',
                loader: async ({params}) =>{
                    const id = params.id;
                    
                    if(id.includes("b")){
                        return fetch(`https://assignment10-server-sable.vercel.app/bundle/${params.id}`)
                    }
                    else{
                        return fetch(`https://assignment10-server-sable.vercel.app/course/${params.id}`)
                    }
                },
                element:<Privateroute><Checkout></Checkout></Privateroute>
            },
                       
            {
                path:'profile',
                element: <Privateroute><Profile></Profile></Privateroute>,
            },
        ]
    },
]);