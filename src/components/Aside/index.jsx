import React from "react";
import { Link } from "react-router-dom";

function Aside() {
    const initialAside = [
        {
            label: "Dashboard",
            href: "/dashboard",
            isActive: true,
        },
        {
            label: "Products",
            href: "/products",
            isActive: true,
        },
        {
            label: "Categories",
            href: "/categories",
            isActive: true,
        },
        {
            label: "Staff",
            href: "/staff",
            isActive: true,
        },
    ];

    const [aside, setAside] = React.useState(initialAside);
    return (
        <section className="aside">
            <ul className="aside__menu">
                {aside.map((item) => (
                    <li key={item.label}>
                        <Link to={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Aside;
