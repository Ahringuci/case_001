import { createSlice } from "@reduxjs/toolkit";
import { GET_API, defaultAPI } from "../../api";
import { STAFFS } from "../../constants";

import { v4 as uuidv4 } from "uuid";

const initValue = () => {
    let _value = GET_API("get", { from: STAFFS }) || defaultAPI.STAFFS;
    return _value;
};

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: initValue(),
    },
    reducers: {
        deleteStaff: (state, action) => {
            const newValue = state.value.filter(
                (item) => item.id !== action.payload
            );
            state.value = newValue;
            GET_API("set", { from: STAFFS, value: newValue });
        },

        editStaffSubmit: (state, action) => {
            let _newValue = state.value.filter(
                (item) => item.id !== action.payload.id
            );
            _newValue.unshift(action.payload);
            state.value = _newValue;

            GET_API("set", { from: STAFFS, value: _newValue });
        },
        addStaff: (state, action) => {
            let _newValue = [...state.value],
                _payload = action.payload;

            let _id = uuidv4();
            _payload.id = _id;
            _newValue.unshift(_payload);

            state.value = _newValue;
            GET_API("set", { from: STAFFS, value: _newValue });
        },
    },
});

// Action creators are generated for each case reducer function
export const { deleteStaff, addStaff, editStaffSubmit } = counterSlice.actions;

export default counterSlice.reducer;
