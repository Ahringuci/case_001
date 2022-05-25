import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/login/loginSlice";
import { useNavigate } from "react-router-dom";

import { USER_LOGIN } from "../../constants";

function Avatar() {
    let _navigate = useNavigate(),
        _dispatch = useDispatch();

    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    useEffect(() => {
        if (!userLogin) {
            _navigate("/login");
        }
    }, []);

    const handleLogout = () => {
        _dispatch(logout());
        _navigate("/login");
    };

    return (
        <div className="header-avatar">
            <p>{userLogin && userLogin.email}</p>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
}

export default Avatar;
