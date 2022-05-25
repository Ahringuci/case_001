import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Login from "./features/login/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Staff from "./pages/Staff";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="categories" element={<Categories />} />
                <Route path="staff" element={<Staff />} />
            </Route>
        </Routes>
    );
}

export default App;
