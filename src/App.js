import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import HomeLayout from "./pages/Home";
import Login from "./features/login/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Staff from "./pages/Staff";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<HomeLayout />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="categories" element={<Categories />} />
                <Route path="staff" element={<Staff />} />
                <Route path="" element={<Staff />} />
            </Route>
        </Routes>
    );
}

export default App;
