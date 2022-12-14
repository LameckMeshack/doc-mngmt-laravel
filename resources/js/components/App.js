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
import DocumentCardContainer from "./DocumentCardContainer";
import Departments from "./Department";
import SpecificDeptCardContainer from "./SpecificDeptCardContainer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <AuthProvider>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/upload" element={<UploadFile />} />
                            <Route
                                path="/documents"
                                element={<DocumentCardContainer />}
                            />
                            <Route
                                path="/departments"
                                element={<Departments />}
                            />
                            <Route
                                path="/department/:id"
                                element={<SpecificDeptCardContainer />}
                            />
                        </Routes>
                    </AuthProvider>
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <App />,

        document.getElementById("app")
    );
}
