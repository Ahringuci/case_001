import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductTable from "./productTable";
import ProductAdd from "./productAdd";

import { defaultAPI, GET_API } from "../../api";
import { CATEGORIES } from "../../constants";

import "./product.scss";

export function Product() {
    const value = useSelector((state) => state.products.value);

    const categoryLists =
        GET_API("get", { from: CATEGORIES }) || defaultAPI.CATEGORIES;

    const [findProduct, setFindProduct] = useState({
        productname: "",
        productcate: "-1",
    });
    const hanldeFindProduct = (e) => {
        setFindProduct({ ...findProduct, [e.target.name]: e.target.value });
    };

    const [addProduct, setAddProduct] = useState(false);
    const handleAddProduct = (e) => {
        e ? setAddProduct(true) : setAddProduct(false);
    };

    let _aaa = [...value];

    if (findProduct.productcate !== "-1") {
        _aaa = value.filter(
            (p) =>
                p.title.includes(findProduct.productname) &&
                p.category[0].id === findProduct.productcate
        );
    } else {
        if (findProduct.productname !== "") {
            _aaa = value.filter((p) =>
                p.title.includes(findProduct.productname)
            );
        }
    }

    return (
        <section className="products-block">
            <h2>Product Lists</h2>

            <div className="search-area">
                <div className="group-inline">
                    <label className="group-input">
                        Tìm kiếm
                        <input
                            className="input"
                            type="text"
                            name="productname"
                            value={findProduct.productname || ""}
                            onChange={(e) => hanldeFindProduct(e)}
                            placeholder="Nhập tên sản phẩm..."
                        />
                    </label>

                    <label className="group-select">
                        Danh mục
                        <select
                            className="select"
                            name="productcate"
                            defaultValue="-1"
                            onChange={(e) => hanldeFindProduct(e)}
                        >
                            <option value="-1">Tất cả</option>
                            {categoryLists.length > 0 &&
                                categoryLists.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.title}
                                    </option>
                                ))}
                        </select>
                    </label>

                    <button
                        className="outline"
                        onClick={() => handleAddProduct(true)}
                    >
                        Thêm sản phẩm
                    </button>
                </div>
            </div>

            <ProductTable productLists={_aaa} />
            {addProduct && (
                <ProductAdd callbackCancelAddProduct={handleAddProduct} />
            )}
        </section>
    );
}
