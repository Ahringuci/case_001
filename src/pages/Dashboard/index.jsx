import React from "react";
import Target from "../../components/Target";

import "./dashboard.scss";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="target-group">
                <Target title={" Lorem ipsum"} value={"-10%"} />
                <Target title={"Quam error"} value={"+100$"} />
                <Target title={"Ea unde hic"} value={"1.87M"} />
                <Target title={"Sit, debitis excepturi"} value={"10.85%"} />
            </div>
            <div className="group-figure">
                <figure>
                    <img
                        src="https://help.quickbase.com/user-assistance/images/line_bar_example.png"
                        alt="asd"
                    />
                </figure>
                <figure>
                    <img
                        src="https://res.edu.vn/wp-content/uploads/2021/12/writing-for-beginner-writing-task-1-pie-chart-2.png"
                        alt="asd"
                    />
                </figure>
            </div>
        </div>
    );
}

export default Dashboard;
