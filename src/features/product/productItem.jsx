import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, editItem } from "./productSlide";
function ProductItems(props) {
    const { id, title, price, category, description, image, rating } =
        props.item;
    const { cbEdit } = props;
    const dispatch = useDispatch();
    const hanldeEdit = () => {
        cbEdit && cbEdit(props.item);
    };
    return (
        <tr className="product-item">
            <th>{id}</th>
            <td>{title}</td>
            <td>
                <img className="img" src={image} alt={title} />
            </td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td>{rating.rate}</td>
            <td>
                <button aria-label="edit value" onClick={hanldeEdit}>
                    Edit
                </button>
                <button
                    aria-label="delete value"
                    onClick={() => dispatch(deleteItem(id))}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}
export default ProductItems;
