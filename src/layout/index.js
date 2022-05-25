import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

function Layout() {
    return (
        <>
            <Header />
            <div className="container">
                <Aside />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
