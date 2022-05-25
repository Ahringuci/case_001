import React from "react";

function ProductEdit(props) {
    const { id, title, price, category, description, image, rating } =
        props.item;
    return (
        <div>
            {id}
            {title}
        </div>
    );
}

export default ProductEdit;
