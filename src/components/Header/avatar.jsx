import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

import { USER_LOGIN } from "../../constants";

function Avatar() {
    let navigate = useNavigate(),
        dispatch = useDispatch();

    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    useEffect(() => {
        if (!userLogin) {
            navigate("/login");
        }
    }, [navigate, userLogin]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="header-avatar">
            <p>{userLogin && userLogin.email}</p>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
}

export default Avatar;
