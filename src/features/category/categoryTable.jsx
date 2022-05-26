import React, { useState } from "react";

import CategoryItem from "./categoryItem";
import CategoryEdit from "./categoryEdit";

import YesNoConfirm from "../../components/Comfirn";

import { useDispatch } from "react-redux";
import { deleteCategory } from "./categorySlide";

function CategoryTable(props) {
    const dispatch = useDispatch();
    const { categoryLists } = props;

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
            dispatch(deleteCategory(confirmDelete.id));
        }
        setConfirmDelete({ id: -1, sta: false });
    };
    return (
        <div className="scroll">
            {confirmDelete.sta && (
                <YesNoConfirm callbackConfirm={callbackHandleConfirm} />
            )}
            {isEdit && (
                <CategoryEdit
                    item={itemEdit}
                    callbackCancel={callbackHandleCancel}
                />
            )}
            <table className="table category-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Tên</th>
                        <th>Xử lí</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryLists.map((item) => (
                        <CategoryItem
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

export default CategoryTable;
