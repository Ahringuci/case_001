import React, { useEffect } from "react";
import { Product } from "../../features/product/Product.jsx";

function Products() {
    const [listProduct, setListProduct] = React.useState([]);
    useEffect(() => {}, []);

    return (
        <section className="litst-block">
            <Product />
        </section>
    );
}

export default Product;
