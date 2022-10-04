import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import { AuthProvider } from "../context/AuthContext";

it("should take a snapshot", () => {
    const { asFragment } = render(<App />);

    expect(
        asFragment(
            <Provider store={store}>
                <AuthProvider>
                    <MemoryRouter>
                        <App />
                    </MemoryRouter>
                </AuthProvider>
            </Provider>
        )
    ).toMatchSnapshot();
});
