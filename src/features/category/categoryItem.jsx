import React from "react";

function CategoryItem(props) {
    const { id, title } = props.item;
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
            <td>{title}</td>

            <td>
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
            </td>
        </tr>
    );
}
export default CategoryItem;
