import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import App from "./app";

describe("App component", () => {
  it("should display phase banner with tag: DEVELOPMENT", () => {
    render(
      <Router>
        <App />
      </Router>,
    );
    expect(screen.getByText("DEVELOPMENT")).toBeInTheDocument();
  });
});
