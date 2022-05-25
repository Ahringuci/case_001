import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItems from "./productItem";
import ProductEdit from "./productEdit";
import "./product.css";
import { GET_API } from "../../api";
import { PRODUCTS } from "../../constants";

export function Product() {
    const value = useSelector((state) => state.products.value);
    const [isEdit, setIsEdit] = React.useState(false);
    const [itemEdit, setItemEdit] = React.useState(false);
    // const [listsProduct, setListProduct] = React.useState([]);
    //  console.log(value);
    const CBHanldeEdit = (props) => {
        setItemEdit(props);
        console.log(props);
    };
    useEffect(() => {
        // const value = GET_API("get", { from: PRODUCTS });
        // value && setListProduct(value);
    }, []);

    return (
        <section className="">
            <h2>Product Lists</h2>

            {isEdit && (
                <div className="product-edit">
                    <ProductEdit item={itemEdit} />
                </div>
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
                                    cbEdit={CBHanldeEdit}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
            {/* <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div> */}
            {/* <ProductItems/> */}
        </section>
    );
}
