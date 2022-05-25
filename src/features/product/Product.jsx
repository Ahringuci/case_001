import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItems from "./productItem";
import ProductEdit from "./productEdit";
import YesNoConfirm from "../../components/Comfirn";

import { useDispatch } from "react-redux";
import { deleteItem } from "./productSlide";

import "./product.scss";

export function Product() {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.products.value);
    const [isEdit, setIsEdit] = React.useState(false);

    const [itemEdit, setItemEdit] = React.useState(false);

    const callbackHandleEdit = (w) => {
        setItemEdit(w);
        setIsEdit(true);
        console.log("edit");
    };

    const [confirmDelete, setConfirmDelete] = React.useState({
        id: -1,
        sta: false,
    });
    const callbackHandleDelete = (w) => {
        setConfirmDelete({ id: w, sta: true });
    };
    const callbackHandleConfirm = (e) => {
        if (e) {
            dispatch(deleteItem(confirmDelete.id));
        }
        setConfirmDelete({ id: -1, sta: false });
    };
    const CBHanldeCancel = () => {
        setItemEdit({});
        setIsEdit(false);
        console.log("cancel");
    };
    useEffect(() => {
        // const value = GET_API("get", { from: PRODUCTS });
        // value && setListProduct(value);
    }, []);

    return (
        <section className="products-block">
            <h2>Product Lists</h2>
            {confirmDelete.sta && (
                <YesNoConfirm callbackConfirm={callbackHandleConfirm} />
            )}
            {isEdit && (
                <ProductEdit item={itemEdit} callbackCancel={CBHanldeCancel} />
            )}

            <div className="over-scroll">
                <table className="table product-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>image</th>
                            <th>price</th>
                            <th>category</th>
                            <th>description</th>
                            <th>rating</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.length > 0 &&
                            value.map((item) => (
                                <ProductItems
                                    key={item.id}
                                    item={item}
                                    callbackEdit={callbackHandleEdit}
                                    callbackDelete={callbackHandleDelete}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
