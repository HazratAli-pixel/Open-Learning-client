import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Modal from "../Modal/Modal";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";

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
                path:'modal',
                element:<Modal></Modal>
            },
            {
                path:'courses',
                element:<div>fasfsaf</div>
            },
            {
                path:'faq',
                element:<div>faq</div>
            },
            {
                path:'blog',
                element:<div>blog</div>
            },
        ]
    },
]);