import React from "react";
import "./target.scss";
function Target(props) {
    const { title, value } = props;
    return (
        <div className="target-item">
            <h3 className="target-title">{title && title}</h3>
            <p className="target-value">{value && value}</p>
        </div>
    );
}

export default Target;
