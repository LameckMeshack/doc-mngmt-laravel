import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import { Provider } from "react-redux";
import store from "../store/store";
import { AuthProvider } from "../context/AuthContext";
import { MemoryRouter } from "react-router-dom";
/**
 * @jest-environment jsdom
 */
//testing login event
afterEach(cleanup);

it("initially renders without crashing", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <AuthProvider>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </AuthProvider>
        </Provider>
    );
    expect(getByTestId("btn")).toBeTruthy();
});

it("it fires event handleLogin on click", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <AuthProvider>
                <MemoryRouter>
                    <Login />
                </MemoryRouter>
            </AuthProvider>
        </Provider>
    );
    fireEvent.click(getByTestId("btn"));
});
