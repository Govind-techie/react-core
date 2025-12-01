import { useState } from "react";

export default function LudoBoard() {
  // React state holding an OBJECT. Each key represents moves of a color.
  // Important: In React, state should NEVER be mutated directly.
  const [moves, setMoves] = useState({
    blue: 0,
    yellow: 0,
    green: 0,
    red: 0,
  });

  // A single reusable function to update moves based on the color passed.
  function updateMove(color) {
    // Using the callback form of setState because the new state
    // depends on the previous state (prevMoves).
    setMoves((prevMoves) => ({
      // The spread operator (...) creates a NEW object by copying all properties
      // from prevMoves. This is crucial because:
      // 1. React detects state changes by comparing object REFERENCES.
      // 2. If we modify the same object, React won't detect any change.
      // 3. Creating a new object ensures React sees a NEW reference → triggers re-render.
      ...prevMoves,

      // Updating only the selected color.
      // Computed property name [color] lets us dynamically change one key at runtime.
      [color]: prevMoves[color] + 1,
    }));
  }

  return (
    <div>
      <h3>Game Begins!</h3>
      <div className="board">
        {/* Display Blue moves */}
        <p>Blue Moves = {moves.blue}</p>
        <button
          onClick={() => updateMove("blue")}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          +1
        </button>

        {/* Display Yellow moves */}
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          onClick={() => updateMove("yellow")}
          style={{ backgroundColor: "yellow" }}
        >
          +1
        </button>

        {/* Display Green moves */}
        <p>Green Moves = {moves.green}</p>
        <button
          onClick={() => updateMove("green")}
          style={{ backgroundColor: "green", color: "white" }}
        >
          +1
        </button>

        {/* Display Red moves */}
        <p>Red Moves = {moves.red}</p>
        <button
          onClick={() => updateMove("red")}
          style={{ backgroundColor: "red", color: "white" }}
        >
          +1
        </button>
      </div>
    </div>
  );
}
