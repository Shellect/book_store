import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

import Header from "./Header.jsx";
import Profile from "./components/Profile.jsx";
import Gallery from "./components/Gallery.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

const AppLayout = () => (
    <>
        <Header />
        <Outlet />
    </>
);

const router = createBrowserRouter([{
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <Gallery />
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/order",
            element: <Order />
        }
    ]
}]);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}