import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCategorySubmit } from "./categorySlide";

function CategoryEdit(props) {
    const dispatch = useDispatch();

    const { callbackCancel } = props;

    const [itemEdit, setItemEdit] = useState(props.item);

    const handleChange = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value });
    };

    const handleSubmitEdit = () => {
        if (itemEdit.title !== "") {
            dispatch(editCategorySubmit(itemEdit));
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
                <label className="fw">
                    Tên
                    <input
                        className="input"
                        type="text"
                        name="title"
                        value={itemEdit.title || ""}
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

export default CategoryEdit;
