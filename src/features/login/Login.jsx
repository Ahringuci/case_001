import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const error = useSelector((state) => state.form.error);
    const [clientForm, setClientForm] = React.useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if ((user && user.isLogin) || error === null) {
            navigate(`/admin`);
        }
    }, [navigate, error]);

    const dispatch = useDispatch();

    const hanldeChange = (e) => {
        setClientForm({ ...clientForm, [e.target.name]: e.target.value });
    };
    const handleLogout = () => {
        console.log("first");
        dispatch(logout({ id: 1 }));
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
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>LOGIN</h2>
            <div className="group">
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={clientForm.email || ""}
                    onChange={(e) => hanldeChange(e)}
                />
                {error.email && <p>{error.email}</p>}
            </div>
            <div className="group">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={clientForm.password || ""}
                    onChange={(e) => hanldeChange(e)}
                />
                {error.password && <p>{error.password}</p>}
            </div>
            {error.loginState && <p>{error.loginState}</p>}
            <button type="submit">LOGIN</button>
            {/* <button type="submit" onClick={handleLogout}>
                LOG oUT
            </button> */}
        </form>
    );
};

export default Login;
