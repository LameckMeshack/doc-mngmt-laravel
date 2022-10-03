import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store/store";
import { AuthProvider } from "../context/AuthContext";
import UploadFile from "./UploadFile";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/upload" element={<UploadFile />} />
            </Routes>
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </Provider>
        </BrowserRouter>,

        document.getElementById("app")
    );
}
