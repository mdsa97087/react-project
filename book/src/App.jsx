import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import React from "react";
import "./components/card.css";

function App() {
  const [state, setState] = React.useState("Show Non-Fiction Books");

  const toggleText = () => {
    setState(
      state === "Show Non-Fiction Books"
        ? "Show Fictional Books"
        : "Show Non-Fiction Books"
    );
  };
  return (
    <div className="appDiv">
      <h1>Mini Book Store</h1>

      <button
        onClick={toggleText}
        data-testid="toggle-btn"
        style={{
          padding: "10px",
          fontSize: "25px",
          fontWeight: "600",
          color: "white",
          background: "black",
          borderRadius: "10px",
        }}
      >
        {state}
      </button>

      <div data-testid="conditional-container">
        {state === "Show Fictional Books" ? (
          <NonFiction title="Non-Fiction Books" />
        ) : (
          <Fiction title="Fictional Books" />
        )}

        {/* Render either Fiction or NonFiction Based on the Condition */}
      </div>
    </div>
  );
}

export default App;
