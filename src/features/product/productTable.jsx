import React, { useState } from "react";

import ProductItems from "./productItem";
import ProductEdit from "./productEdit";

import YesNoConfirm from "../../components/Comfirn";

import { useDispatch } from "react-redux";
import { deleteItem } from "./productSlide";

function ProductTable(props) {
    const dispatch = useDispatch();
    const { productLists } = props;

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
            dispatch(deleteItem(confirmDelete.id));
        }
        setConfirmDelete({ id: -1, sta: false });
    };
    return (
        <div className="scroll">
            {confirmDelete.sta && (
                <YesNoConfirm callbackConfirm={callbackHandleConfirm} />
            )}
            {isEdit && (
                <ProductEdit
                    item={itemEdit}
                    callbackCancel={callbackHandleCancel}
                />
            )}
            <table className="table product-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Tên</th>
                        <th>Hình ảnh</th>
                        <th>Giá</th>
                        <th>Danh mục</th>
                        <th>Mô tả</th>
                        <th>Đánh giá</th>
                        <th>Xủ lí</th>
                    </tr>
                </thead>
                <tbody>
                    {productLists.map((item) => (
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
    );
}

export default ProductTable;
