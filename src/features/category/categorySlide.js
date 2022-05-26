import { createSlice } from "@reduxjs/toolkit";
import { GET_API, defaultAPI } from "../../api";
import { CATEGORIES } from "../../constants";

import { v4 as uuidv4 } from "uuid";

const initValue = () => {
    let _value = GET_API("get", { from: CATEGORIES }) || defaultAPI.CATEGORIES;
    return _value;
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: initValue(),
    },
    reducers: {
        deleteCategory: (state, action) => {
            const newValue = state.value.filter(
                (item) => item.id !== action.payload
            );
            state.value = newValue;
            GET_API("set", { from: CATEGORIES, value: newValue });
        },

        editCategorySubmit: (state, action) => {
            let _newValue = state.value.filter(
                (item) => item.id !== action.payload.id
            );
            _newValue.unshift(action.payload);
            state.value = _newValue;

            GET_API("set", { from: CATEGORIES, value: _newValue });
        },
        addCategory: (state, action) => {
            let _newValue = [...state.value],
                _payload = action.payload;

            let _id = uuidv4();
            _payload.id = _id;
            _newValue.unshift(_payload);

            state.value = _newValue;
            GET_API("set", { from: CATEGORIES, value: _newValue });
        },
    },
});

// Action creators are generated for each case reducer function
export const { deleteCategory, addCategory, editCategorySubmit } =
    counterSlice.actions;

export default counterSlice.reducer;
