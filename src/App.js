import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Layout from "./pages/Layout";
import NavBar from "./pages/Navbar";
import Users from "./pages/User/Users";
import User from "./pages/User/User";
import Products from "./pages/Product/Products";
import Product from "./pages/Product/Product";

const ROLES = {
  User: 2001,
  Admin: 5150,
};

function App() {
  return (
      <>
        <NavBar> </NavBar>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="Users" element={<Users />} />
            <Route path="User/:id" element={<User />} />
            <Route path="Products" element={<Products />} />
            <Route path="Product/:id" element={<Product />} />
          </Route>
        </Routes>
      </>
  );
}

export default App;