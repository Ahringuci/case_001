import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./loginSlice";
import { useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../../constants";
/** scss */
import "./login.scss";

const Login = () => {
    const error = useSelector((state) => state.form.error);
    const [clientForm, setClientForm] = useState({
        email: "",
        password: "",
    });
    const [viewPassword, setViewPassword] = useState("password");
    const handleViewPassword = () => {
        viewPassword === "" ? setViewPassword("password") : setViewPassword("");
    };
    let navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(USER_LOGIN));

        if ((user && user.email) || error === null) {
            navigate("/");
        }
    }, [navigate, error]);

    const dispatch = useDispatch();

    const hanldeChange = (e) => {
        setClientForm({ ...clientForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let _clientForm = {
            email: clientForm.email,
            password: clientForm.password,
        };
        dispatch(login(_clientForm));
    };
    return (
        <div className="login">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h2>Đăng nhập</h2>
                <div className="group">
                    <label>Tài khoản</label>
                    <input
                        className="input"
                        type="text"
                        name="email"
                        value={clientForm.email || ""}
                        onChange={(e) => hanldeChange(e)}
                    />
                    {error.email && (
                        <p className="txt txt-error">{error.email}</p>
                    )}
                </div>
                <div className="group">
                    <label>Mật khẩu</label>
                    <div className="por-relative">
                        <input
                            className="input"
                            type={viewPassword}
                            name="password"
                            value={clientForm.password || ""}
                            onChange={(e) => hanldeChange(e)}
                        />
                        <span
                            className={`password-view ${
                                viewPassword === "" ? "hide" : ""
                            }`}
                            onClick={handleViewPassword}
                        ></span>
                    </div>
                    {error.password && (
                        <p className="txt txt-error">{error.password}</p>
                    )}
                </div>

                {error.loginState && (
                    <p className="txt txt-error">{error.loginState}</p>
                )}
                <button type="submit">LOGIN</button>
                {/* <button type="submit" onClick={handleLogout}>
                LOG oUT
            </button> */}
            </form>
        </div>
    );
};

export default Login;
