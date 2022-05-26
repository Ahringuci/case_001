import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "./categorySlide";

function ProductAdd(props) {
    const dispatch = useDispatch();

    const { callbackCancelAddcategory } = props;

    const [itemEdit, setItemEdit] = useState({ title: "" });

    const handleChange = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value });
    };

    const handleSubmitEdit = () => {
        if (itemEdit.title !== "") {
            dispatch(addCategory(itemEdit));
            callbackCancelAddcategory && callbackCancelAddcategory();
        }
    };

    const handleSubmitCancel = () => {
        callbackCancelAddcategory && callbackCancelAddcategory(false);
    };

    return (
        <div className="product-edit is-open">
            <div
                className="product-edit-mask"
                onClick={handleSubmitCancel}
            ></div>

            <div className="product-edit-group">
                <h2>Thêm Danh mục</h2>
                <label className="fw">
                    Tên
                    <input
                        className="input"
                        type="text"
                        name="title"
                        value={itemEdit.title || ""}
                        placeholder="Nhập tên danh mục"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <div className="group-inline">
                    <button className="outline" onClick={handleSubmitEdit}>
                        Đồng ý
                    </button>
                    <button onClick={handleSubmitCancel}> Hủy </button>
                </div>
            </div>
        </div>
    );
}

export default ProductAdd;
