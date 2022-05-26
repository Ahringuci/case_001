import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryTable from "./categoryTable";
import CategoryAdd from "./categoryAdd";

import { defaultAPI, GET_API } from "../../api";
import { CATEGORIES } from "../../constants";

import "./category.scss";

export function Category() {
    const value = useSelector((state) => state.categories.value);

    const categoryLists =
        GET_API("get", { from: CATEGORIES }) || defaultAPI.CATEGORIES;

    const [findcategory, setFindcategory] = useState({
        categoryname: "",
    });
    const hanldeFindcategory = (e) => {
        setFindcategory({ ...findcategory, [e.target.name]: e.target.value });
    };

    const [addcategory, setAddcategory] = useState(false);
    const handleAddcategory = (e) => {
        e ? setAddcategory(true) : setAddcategory(false);
    };

    let _aaa = [...value];

    if (findcategory.categoryname !== "") {
        _aaa = value.filter((p) => p.title.includes(findcategory.categoryname));
    }

    return (
        <section className="categorys-block">
            <h2>Danh sach danh mục</h2>

            <div className="search-area">
                <div className="group-inline">
                    <label className="group-input">
                        Tìm kiếm
                        <input
                            className="input"
                            type="text"
                            name="categoryname"
                            value={findcategory.categoryname || ""}
                            onChange={(e) => hanldeFindcategory(e)}
                            placeholder="Nhập tên danh mục..."
                        />
                    </label>

                    <button
                        className="outline"
                        onClick={() => handleAddcategory(true)}
                    >
                        Thêm danh mục
                    </button>
                </div>
            </div>

            <CategoryTable categoryLists={_aaa} />
            {addcategory && (
                <CategoryAdd callbackCancelAddcategory={handleAddcategory} />
            )}
        </section>
    );
}
