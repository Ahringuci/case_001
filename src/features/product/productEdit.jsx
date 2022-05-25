import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GET_API, defaultAPI } from "../../api";
import { editItemSubmit } from "./productSlide";
import { CATEGORIES } from "../../constants";

function ProductEdit(props) {
    const dispatch = useDispatch();
    const categoryLists =
        JSON.parse(GET_API("get", CATEGORIES)) || defaultAPI[CATEGORIES];

    const { id, title, price, description, image } = props.item;

    const { callbackCancel } = props;

    const [itemEdit, setItemEdit] = useState(props.item);
    const [itemCategories, setItemCategories] = useState(categoryLists[0]);
    const hanldeChangeCategory = (e) => {
        let _id = e.target.value;
        for (let _cate of categoryLists) {
            if (_cate.id === _id) {
                setItemCategories(_cate);
                break;
            }
        }
    };
    const handleChange = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value });
    };

    const handleSubmitEdit = () => {
        if (itemEdit.title !== "" && itemEdit.price !== "") {
            let _setItem = { ...itemEdit };
            _setItem.category = [itemCategories];
            dispatch(editItemSubmit(_setItem));
            callbackCancel && callbackCancel();
        }
    };

    const handleSubmitCancel = () => {
        callbackCancel && callbackCancel();
    };

    return (
        <div className="product-edit is-open">
            <div
                className="product-edit-mask"
                onClick={handleSubmitCancel}
            ></div>

            <div className="product-edit-group">
                <label>
                    Tên
                    <input
                        className="input"
                        type="text"
                        name="title"
                        value={itemEdit.title || ""}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label>
                    Giá
                    <input
                        className="input"
                        type="number"
                        name="price"
                        value={itemEdit.price || ""}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label className="group">
                    Loại hàng
                    <select
                        className="select"
                        onChange={(e) => hanldeChangeCategory(e)}
                    >
                        {categoryLists &&
                            categoryLists.map((cate) => (
                                <option key={cate.id} value={cate.id}>
                                    {cate.title}
                                </option>
                            ))}
                    </select>
                </label>
                <label>
                    Hình ảnh
                    <input
                        className="input"
                        type="text"
                        name="image"
                        value={itemEdit.image || ""}
                        onChange={(e) => handleChange(e)}
                    />
                </label>

                <label className="fw">
                    Mô tả
                    <textarea
                        className="textarea"
                        rows="10"
                        type="text"
                        name="description"
                        value={itemEdit.description || ""}
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

export default ProductEdit;
