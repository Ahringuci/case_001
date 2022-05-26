import React from "react";
import { useNavigate, Link } from "react-router-dom";

import "./dashboard.scss";

function Dashboard() {
    let navigate = useNavigate();

    return (
        <div className="dashboard">
            <div className="group-figure">
                <figure>
                    <img
                        src="https://pnp.github.io/sp-dev-fx-controls-react/assets/BarChart.png"
                        alt="asd"
                    />
                </figure>
            </div>
            <figure></figure>
            <div className="dashboard-group">
                <button className="outline">
                    <Link to="/products">Sản phẩm</Link>
                </button>
                <button>
                    <Link to="/categories">Danh mục</Link>
                </button>
                <button>
                    <Link to="/staff">Nhân viên</Link>
                </button>
            </div>{" "}
        </div>
    );
}

export default Dashboard;
