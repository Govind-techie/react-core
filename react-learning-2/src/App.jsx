import "./App.css";
import Counter from "./Counter";
import LikeButton from "./likeButton";

function App() {
  return (
    <>
      {/* Rendering the Counter component.
          Clicking this button updates the state inside Counter using useState. */}
      <Counter />
      {/* Rendering the LikeButton component.
          Clicking the heart toggles its 'liked' state and updates the icon + color. */}
      <LikeButton />
    </>
  );
}

export default App;
