import React from "react";
import { NavLink, useParams } from "react-router-dom";

import "./aside.scss";
function Aside() {
    const asideLists = [
        { id: 1, label: "Bảng", href: "/dashboard", isActive: true },
        { id: 2, label: "Sản phẩm", href: "/products", isActive: false },
        { id: 3, label: "Loại", href: "/categories", isActive: false },
        { id: 4, label: "Nhân viên", href: "/staff", isActive: false },
    ];
    const [aside, setAside] = React.useState(asideLists);
    return (
        <section className="aside">
            <ul className="aside__menu">
                {aside.map((item) => (
                    <li key={item.id}>
                        <NavLink to={item.href}>{item.label}</NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Aside;
