import { API_PRODUCTS } from "./products";
import { API_STAFF } from "./staff";
import { API_CATEGORIES } from "./categories";
import { v4 as uuidv4 } from "uuid";

import { LOCAL_SET, PRODUCTS, CATEGORIES, STAFFS } from "../constants";
export const ApiFromLocalStorage = (type, payload) => {
    if (type === "get") {
        return localStorage.getItem(payload.from);
    }
    if (type === "set") {
        localStorage.setItem(payload.from, JSON.stringify(payload.value));
    }
    if (type === "unset" || type === "remove") {
        localStorage.removeItem(payload.from);
    }
};

export const initAPI = () => {
    ApiFromLocalStorage("set", { from: LOCAL_SET, value: true });
    ApiFromLocalStorage("set", { from: PRODUCTS, value: API_PRODUCTS });
    ApiFromLocalStorage("set", { from: STAFFS, value: API_STAFF });
    ApiFromLocalStorage("set", { from: CATEGORIES, value: API_CATEGORIES });
    console.log("--------- set api ----------------");
};

export const GET_API = (type, action) => {
    switch (type) {
        case "get": {
            const data = ApiFromLocalStorage("get", { from: action.from });
            return JSON.parse(data);
        }

        case "set": {
            ApiFromLocalStorage("set", {
                from: action.from,
                value: action.value,
            });
            return true;
        }

        case "add": {
            console.log("----- add ----");
            let _data = ApiFromLocalStorage("get", { from: action.from });
            _data = JSON.parse(_data);

            let _newItem = action.value;
            _newItem.id = uuidv4();

            typeof _data === "object" && _data.push(_newItem);
            ApiFromLocalStorage("set", { from: action.from, value: _data });

            return true;
        }

        case "delete": {
            console.log("----- delete -----");

            let _data = ApiFromLocalStorage("get", { from: action.from });
            _data = JSON.parse(_data);

            if (typeof _data === "object") {
                _data = _data.filter((item) => item.id !== action.value.id);
                ApiFromLocalStorage("set", { from: action.from, value: _data });
                return true;
            }
            return false;
        }

        case "get-detail": {
            console.log("----- get detail -----");

            let _data = ApiFromLocalStorage("get", { from: action.from });
            _data = JSON.parse(_data);

            if (typeof _data === "object") {
                _data = _data.filter((item) => item.id === action.value.id);
                console.log(_data);
                if (_data) {
                    return _data[0];
                } else {
                    return null;
                }
            }
            return false;
        }

        default:
            break;
    }
};
