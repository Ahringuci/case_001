import { createSlice } from "@reduxjs/toolkit";
import { GET_API, ApiFromLocalStorage } from "../../api";
import { STAFFS, USER_LOGIN } from "../../constants";
import { API_STAFF } from "../../api/staff";
export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: false,
        role: -1,
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
                error.email = "Tài khoản không được trống !";
            } else {
                if (password === "") {
                    error.password = "Mật khẩu không được trống";
                } else {
                    let _check = false;
                    const Staff = GET_API("get", { from: STAFFS }) || API_STAFF;

                    if (Staff) {
                        for (let _staff of Staff) {
                            if (
                                _staff.email === email &&
                                _staff.password === password
                            ) {
                                _check = true;
                                user.email = email;
                                user.role = _staff.role;
                                break;
                            }
                        }

                        if (_check) {
                            state.isLogin = true;
                            state.role = user.role;
                            ApiFromLocalStorage("set", {
                                from: USER_LOGIN,
                                value: user,
                            });
                        } else {
                            error.loginState = "Sai tài khoản / mật khẩu";
                        }
                    } else {
                        error.loginState =
                            "Lỗi hệ thống, tải lại trang và thử lại";
                    }
                }
            }
            state.error = error;
        },
        logout: (state) => {
            ApiFromLocalStorage("unset", { from: USER_LOGIN });
            state.isLogin = false;
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
