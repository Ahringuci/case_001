import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

import { useNavigate } from "react-router-dom";

import { USER_LOGIN } from "../constants";

import "./layout.scss";

function Layout() {
    let _navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(USER_LOGIN));
        if (!user || user === null || user === undefined) {
            _navigate("/login");
        }
    }, []);

    return (
        <>
            <Header />
            <div className="layout">
                <Aside />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
