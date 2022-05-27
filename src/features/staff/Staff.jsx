import React, { useState } from "react";
import { useSelector } from "react-redux";
import StaffTable from "./staffTable";
import StaffAdd from "./staffAdd";

import { GET_API } from "../../api";
import { STAFFS, USER_LOGIN } from "../../constants";

import "./staff.scss";

export function Staff() {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));

    const value = useSelector((state) => state.staffs.value);

    const staffLists = GET_API("get", { from: STAFFS }) || value;

    const [findstaff, setFindstaff] = useState({
        staffname: "",
    });
    const hanldeFindstaff = (e) => {
        setFindstaff({ ...findstaff, [e.target.name]: e.target.value });
    };

    const [addstaff, setAddstaff] = useState(false);
    const handleAddstaff = (e) => {
        e ? setAddstaff(true) : setAddstaff(false);
    };

    let _aaa = [...staffLists];

    if (findstaff.staffname !== "") {
        _aaa = value.filter((p) => p.title.includes(findstaff.staffname));
    }

    return (
        <section className="staffs-block">
            <h2>Danh sach danh mục</h2>

            <div className="search-area">
                <div className="group-inline">
                    <label className="group-input">
                        Tìm kiếm
                        <input
                            className="input"
                            type="text"
                            name="staffname"
                            value={findstaff.staffname || ""}
                            onChange={(e) => hanldeFindstaff(e)}
                            placeholder="Nhập tên danh mục..."
                        />
                    </label>
                    {userLogin.role === "1" ? (
                        <button
                            className="outline"
                            onClick={() => handleAddstaff(true)}
                        >
                            Thêm nhân viên
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>

            <StaffTable staffLists={_aaa} />
            {addstaff && <StaffAdd callbackCancelAddStaff={handleAddstaff} />}
        </section>
    );
}
