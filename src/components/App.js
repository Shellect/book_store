import React from "react";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Header from "./Header.jsx";
import Profile from "./Profile.jsx";
import Gallery from "./Gallery.jsx";
import Cart from "./Cart.jsx";
import Order from "./Order.jsx";


const router = createBrowserRouter([
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
]);

export default function App() {
    return (
        // React.createElement('div')
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
}