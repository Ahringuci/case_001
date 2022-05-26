import React from "react";
import { NavLink } from "react-router-dom";

import "./aside.scss";
function Aside() {
    const asideLists = [
        { id: 1, label: "Bảng", href: "/dashboard" },
        { id: 2, label: "Sản phẩm", href: "/products" },
        { id: 3, label: "Danh mục", href: "/categories" },
        { id: 4, label: "Nhân viên", href: "/staff" },
    ];

    return (
        <section className="aside">
            <ul className="aside__menu">
                {asideLists.map((item) => (
                    <li key={item.id}>
                        <NavLink to={item.href}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Aside;
