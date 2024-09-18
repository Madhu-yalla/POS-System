import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Content from "./pages/Content";
import Modal from "./components/Modal";
import CategoryProducts from "./pages/CategoryProducts";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";
import './index.css'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PrivateRoute protects the /dashboard and its child routes */}
            <Route
              path="/dashboard"
              element={

                <Dashboard />

              }
            >
              <Route
                path="content"
                element={
                  <PrivateRoute>
                    <Content />
                  </PrivateRoute>
                }
              />
              <Route path="orders" element={<Orders />} />
              <Route path="form" element={<Modal />} />
              <Route path="category/:category" element={<CategoryProducts />} />
            </Route>

            {/* Cart Route protected by PrivateRoute */}
            <Route path="/cart" element={<Cart />} />

            {/* Fallback route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
