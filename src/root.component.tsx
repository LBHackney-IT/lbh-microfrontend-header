import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app";

export default function Root(): JSX.Element {
  return (
    <Router>
      <App />
    </Router>
  );
}
