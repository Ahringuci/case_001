import { createSlice } from "@reduxjs/toolkit";
import { GET_API } from "../../api";
import { PRODUCTS } from "../../constants";
const initValue = () => {
    let _value = GET_API("get", { from: PRODUCTS });
    return _value;
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
        editItem: (state, action) => {
            state.value -= 1;
        },
        editItemSubmit: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { deleteItem, editItem, editItemSubmit } = counterSlice.actions;

export default counterSlice.reducer;
