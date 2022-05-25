import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "./productSlide";

function ProductItems(props) {
    const { id, title, price, category, description, image, rating } =
        props.item;
    const { callbackEdit, callbackDelete } = props;
    const dispatch = useDispatch();

    const hanldeEdit = () => {
        callbackEdit && callbackEdit(props.item);
    };
    const [deleteState, setDeleteState] = React.useState(false);
    const hanldeDelete = () => {
        callbackDelete && callbackDelete(id);
        // dispatch(deleteItem(id))
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
                {category &&
                    category.map((cate) => (
                        <span key={cate.id} className="tag">
                            {cate.title}
                        </span>
                    ))}
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
