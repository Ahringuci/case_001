import React from "react";

import { USER_LOGIN } from "../../constants";
function CategoryItem(props) {
    const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
    const { id, email } = props.item;
    const { callbackEdit, callbackDelete } = props;

    const hanldeEdit = () => {
        callbackEdit && callbackEdit(props.item);
    };
    const hanldeDelete = () => {
        callbackDelete && callbackDelete(id);
        // dispatch(deleteItem(id))
    };

    return (
        <tr className="category-item">
            <th>{id}</th>
            <td>{email}</td>

            <td>
                {userLogin.role === "1" ? (
                    <>
                        <button
                            className="outline"
                            aria-label="edit value"
                            onClick={hanldeEdit}
                        >
                            Chỉnh sửa
                        </button>
                        <button
                            aria-label="delete value"
                            onClick={() => hanldeDelete()}
                        >
                            Xóa
                        </button>
                    </>
                ) : (
                    ""
                )}
            </td>
        </tr>
    );
}
export default CategoryItem;
