import { createSlice } from "@reduxjs/toolkit";
import { GET_API } from "../../api";
import { PRODUCTS } from "../../constants";
import { API_PRODUCTS } from "../../api/products";

const initValue = () => {
    let _value = GET_API("get", { from: PRODUCTS });
    if (_value) {
        return _value;
    } else {
        return API_PRODUCTS;
    }
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: initValue(),
    },
    reducers: {
        deleteItem: (state, action) => {
            console.log(action.payload);

            const newValue = state.value.filter(
                (item) => item.id !== action.payload
            );
            state.value = newValue;
            GET_API("set", { from: PRODUCTS, value: newValue });
        },

        editItemSubmit: (state, action) => {
            let _newValue = state.value.filter(
                (item) => item.id !== action.payload.id
            );
            _newValue.unshift(action.payload);
            state.value = _newValue;
            GET_API("set", { from: PRODUCTS, value: _newValue });
        },
    },
});

// Action creators are generated for each case reducer function
export const { deleteItem, editItem, editItemSubmit } = counterSlice.actions;

export default counterSlice.reducer;
