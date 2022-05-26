import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { GET_API, defaultAPI } from "../../api";
import { addItem } from "./productSlide";
import { CATEGORIES } from "../../constants";

function ProductAdd(props) {
    const dispatch = useDispatch();
    const categoryLists =
        GET_API("get", { from: CATEGORIES }) || defaultAPI.CATEGORIES;

    const { callbackCancelAddProduct } = props;

    const [itemEdit, setItemEdit] = useState({
        title: "",
        price: "",
        category: {},
        image: "https://via.placeholder.com/150",
        description: "",
    });
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

            dispatch(addItem(_setItem));
            callbackCancelAddProduct && callbackCancelAddProduct();
        }
    };

    const handleSubmitCancel = () => {
        callbackCancelAddProduct && callbackCancelAddProduct(false);
    };

    return (
        <div className="product-edit is-open">
            <div
                className="product-edit-mask"
                onClick={handleSubmitCancel}
            ></div>

            <div className="product-edit-group">
                <h2>Thêm sản phẩm</h2>
                <label>
                    Tên
                    <input
                        className="input"
                        type="text"
                        name="title"
                        value={itemEdit.title || ""}
                        placeholder="Nhập tên sản phẩm"
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
                        placeholder="Nhập gía sản phẩm"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label className="group">
                    Danh mục
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
                        placeholder="Nhập đường dẫn / url hình ảnh"
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
                        placeholder="Nhập mô tả"
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
