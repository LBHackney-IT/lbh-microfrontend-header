import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import App from "./app";
import { config } from "./services";

describe("App component", () => {
  test("it shows the phase banner with DEVELOPMENT tag", () => {
    render(
      <Router>
        <App />
      </Router>,
    );
    expect(screen.getByText("DEVELOPMENT")).toBeInTheDocument();
  });

  test("it shows the default phase banner with DEVELOPMENT tag if appEnv is falsy", () => {
    config.appEnv = "";
    render(
      <Router>
        <App />
      </Router>,
    );
    expect(screen.getByText("DEVELOPMENT")).toBeInTheDocument();
  });

  test("it shows the phase banner with STAGING tag", () => {
    config.appEnv = "staging";
    render(
      <Router>
        <App />
      </Router>,
    );
    expect(screen.getByText("STAGING")).toBeInTheDocument();
  });

  test("it shows the phase banner with BETA tag", () => {
    config.appEnv = "production";
    render(
      <Router>
        <App />
      </Router>,
    );
    expect(screen.getByText("BETA")).toBeInTheDocument();
  });
});
