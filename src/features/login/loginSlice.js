import { createSlice } from "@reduxjs/toolkit";
import { GET_API, ApiFromLocalStorage } from "../../api";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        error: {
            email: "",
            password: "",
            loginState: "",
        },
    },
    reducers: {
        login: (state, action) => {
            // console.log(state.user.email, action);
            const { email, password } = action.payload;
            const error = {};
            const user = {};
            if (email === "") {
                error.email = "khong duoc de trong !";
            } else {
                if (password === "") {
                    error.password = "khong duoc de trong";
                } else {
                    let _check = false;
                    const Staff = GET_API("get", { from: "staff" });

                    if (Staff) {
                        for (let _staff of Staff) {
                            if (
                                _staff.email === email &&
                                _staff.password === password
                            ) {
                                _check = true;
                                user.email = email;
                                user.password = password;
                                user.isLogin = true;
                                user.role = _staff.role;
                                break;
                            }
                        }

                        if (_check) {
                            console.log("check, login sucess");
                            ApiFromLocalStorage("set", {
                                from: "user",
                                value: user,
                            });
                        } else {
                            error.loginState = "sai tai khoan hoac mat khau";
                        }
                    } else {
                        error.loginState = "loi he thong";
                    }
                }
            }
            state.error = error;
        },
        logout: (state, action) => {
            ApiFromLocalStorage("unset", { from: "user" });
        },
        forgot: (state, action) => {
            console.log(action.payload);
        },
    },
});
// const fetchUserById = (userId) => {
//     // the inside "thunk function"
//    // return async (dispatch, getState) => {
//         try {
//             console.log("ind");
//             // make an async call in the thunk
//             const user = await fetch("https://fakestoreapi.com/products/1");
//             // dispatch an action when we get the response back
//             console.log(user);
//         } catch (err) {
//             // If something went wrong, handle it here
//             console.log("err");
//         }
//     };
// };
// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
