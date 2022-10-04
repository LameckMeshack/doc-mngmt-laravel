import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
// testing auth context
import { AuthContext, AuthProvider } from "../context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { after } from "laravel-mix";

const renderWithContext = (component) => {
    return {
        TestRenderer(
            <AuthProvider value={{ user: null, setUser: jest.fn() }}>
                <MemoryRouter>{component}</MemoryRouter>
            </AuthProvider>
        ),
    };
};

afterEach(cleanup);
it("checks if initial state is null", () => {
    const { result } = renderWithContext(<AuthContext />);
    expect(result.current.user).toBeNull();
});
