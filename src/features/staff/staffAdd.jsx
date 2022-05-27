import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStaff } from "./staffSlide";

function StaffAdd(props) {
    const dispatch = useDispatch();

    const { callbackCancelAddStaff } = props;

    const [itemEdit, setItemEdit] = useState({ email: "" });

    const handleChange = (e) => {
        setItemEdit({ ...itemEdit, [e.target.name]: e.target.value });
    };

    const handleSubmitEdit = () => {
        if (itemEdit.email !== "") {
            dispatch(addStaff(itemEdit));
            callbackCancelAddStaff && callbackCancelAddStaff();
        }
    };

    const handleSubmitCancel = () => {
        callbackCancelAddStaff && callbackCancelAddStaff(false);
    };

    return (
        <div className="staff-edit is-open">
            <div className="staff-edit-mask" onClick={handleSubmitCancel}></div>

            <div className="staff-edit-group">
                <h2>Thêm Nhân viên</h2>
                <label className="">
                    Tài khoản
                    <input
                        className="input"
                        type="text"
                        name="email"
                        value={itemEdit.email || ""}
                        placeholder="Nhập tài khoản"
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
                        placeholder="Nhập mật khẩu"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <label className="">
                    Quyền sử dụng
                    <select
                        className="select"
                        name="role"
                        defaultValue="2"
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

export default StaffAdd;
