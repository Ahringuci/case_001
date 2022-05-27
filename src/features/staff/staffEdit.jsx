import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editStaffSubmit } from "./staffSlide";

function StaffEdit(props) {
    const dispatch = useDispatch();

    const { callbackCancel } = props;

    const [itemEdit, setItemEdit] = useState(props.item);

    const handleChange = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value });
    };

    const handleSubmitEdit = () => {
        if (itemEdit.email !== "" && itemEdit.email !== "") {
            dispatch(editStaffSubmit(itemEdit));
            callbackCancel && callbackCancel();
        }
    };

    const handleSubmitCancel = () => {
        callbackCancel && callbackCancel();
    };

    return (
        <div className="staff-edit is-open">
            <div className="staff-edit-mask" onClick={handleSubmitCancel}></div>

            <div className="staff-edit-group">
                <label className="">
                    Tên
                    <input
                        className="input"
                        type="text"
                        name="email"
                        value={itemEdit.email || ""}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label className="">
                    Mật khẩu
                    <input
                        className="input"
                        type="text"
                        name="password"
                        value={itemEdit.password || ""}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label className="">
                    <select
                        className="select"
                        name="role"
                        defaultValue={itemEdit.role || "2"}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
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

export default StaffEdit;
