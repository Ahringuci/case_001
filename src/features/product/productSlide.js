import { createSlice } from "@reduxjs/toolkit";
import { GET_API } from "../../api";
import { PRODUCTS } from "../../constants";
import { API_PRODUCTS } from "../../api/products";

import { v4 as uuidv4 } from "uuid";

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
        addItem: (state, action) => {
            let _newValue = [...state.value],
                _payload = action.payload;

            let _id = uuidv4(),
                _rate = { rate: 0, count: 0 };
            _payload.id = _id;
            _payload.rating = _rate;
            _newValue.unshift(_payload);
            state.value = _newValue;
            GET_API("set", { from: PRODUCTS, value: _newValue });
        },
    },
});

// Action creators are generated for each case reducer function
export const { deleteItem, addItem, editItemSubmit } = counterSlice.actions;

export default counterSlice.reducer;
