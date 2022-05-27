import React from "react";
import { NavLink } from "react-router-dom";
import "./navGroup.scss";

function index() {
    return (
        <div className="nav-group">
            <NavLink className="button" to="/dashboard">
                Bảng
            </NavLink>

            <NavLink className="button" to="/products">
                Sản phẩm
            </NavLink>

            <NavLink className="button" to="/categories">
                Danh mục
            </NavLink>

            <NavLink className="button" to="/staff">
                Nhân viên
            </NavLink>
        </div>
    );
}

export default index;
