import React from "react";

import { defaultAPI, GET_API } from "../../api";
import { CATEGORIES } from "../../constants";

function ProductItems(props) {
    const { id, title, price, category, description, image, rating } =
        props.item;

    const categoryLists =
        GET_API("get", { from: CATEGORIES }) || defaultAPI.CATEGORIES;

    const { callbackEdit, callbackDelete } = props;

    const hanldeEdit = () => {
        callbackEdit && callbackEdit(props.item);
    };
    const hanldeDelete = () => {
        callbackDelete && callbackDelete(id);
        // dispatch(deleteItem(id))
    };

    const CateTag = () => {
        for (let _item of categoryLists) {
            for (let _cat of category) {
                if (_cat.id === _item.id) {
                    return <span className="tag">{_item.title}</span>;
                }
            }
        }
        return <span></span>;
    };
    return (
        <tr className="product-item">
            <th>{id}</th>
            <td>{title}</td>
            <td>
                <img className="img" src={image} alt={title} />
            </td>
            <td>{price}</td>
            <td>
                <CateTag />
            </td>
            <td>{description}</td>
            <td>{rating.rate}</td>
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
export default ProductItems;
