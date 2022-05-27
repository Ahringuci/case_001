import React, { useState } from "react";

import StaffItem from "./staffItem";
import StaffEdit from "./staffEdit";

import YesNoConfirm from "../../components/Comfirn";

import { useDispatch } from "react-redux";
import { deleteStaff } from "./staffSlide";

function StaffTable(props) {
    const dispatch = useDispatch();
    const { staffLists } = props;

    const [confirmDelete, setConfirmDelete] = useState({
        id: -1,
        sta: false,
    });

    const [isEdit, setIsEdit] = useState(false);
    const [itemEdit, setItemEdit] = useState(false);

    const callbackHandleEdit = (itemEdit) => {
        setItemEdit(itemEdit);
        setIsEdit(true);
    };

    const callbackHandleCancel = () => {
        setItemEdit({});
        setIsEdit(false);
    };

    const callbackHandleDelete = (itemID) => {
        setConfirmDelete({ id: itemID, sta: true });
    };
    const callbackHandleConfirm = (e) => {
        if (e) {
            dispatch(deleteStaff(confirmDelete.id));
        }
        setConfirmDelete({ id: -1, sta: false });
    };
    return (
        <div className="scroll">
            {confirmDelete.sta && (
                <YesNoConfirm callbackConfirm={callbackHandleConfirm} />
            )}
            {isEdit && (
                <StaffEdit
                    item={itemEdit}
                    callbackCancel={callbackHandleCancel}
                />
            )}
            <table className="table staff-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Email</th>
                        <th>Xử lí</th>
                    </tr>
                </thead>
                <tbody>
                    {staffLists.map((item) => (
                        <StaffItem
                            key={item.id}
                            item={item}
                            callbackEdit={callbackHandleEdit}
                            callbackDelete={callbackHandleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StaffTable;
