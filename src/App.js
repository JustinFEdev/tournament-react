import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoaderSpinner from "./components/util/LoaderSpinner";

import "./App.css";
import Page from "./Page";

function App() {
  // loading spinner
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoaderSpinner />
          </div>
        ) : (
          <Router>
            <Page />
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
