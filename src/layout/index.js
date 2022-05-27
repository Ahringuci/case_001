import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

import { useNavigate } from "react-router-dom";

import { USER_LOGIN } from "../constants";
import NavGroup from "../components/NavGroup";

import "./layout.scss";

function Layout() {
    let navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(USER_LOGIN));
        if (!user || user === null || user === undefined) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <>
            <Header />
            <div className="layout">
                <Aside />
                <NavGroup />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
