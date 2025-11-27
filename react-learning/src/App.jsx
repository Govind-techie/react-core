// Importing the CSS file to apply styles to the component
import "./App.css";
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";

// Another functional component named Description.
// Each component can return only ONE parent element.
function Description() {
  return <h3>Some Description</h3>;
}

// Main App component - this is the root component of the React application.
// We can render other components (Title, Description) inside this component.
// React components must return a single root element, so multiple elements must be wrapped inside a parent tag like <div>, <main>, or <> (fragment).
function App() {
  let name = "casey";
  return (
    <>
      {" "}
      {/* Using React Fragment (<></>) to wrap multiple elements without adding extra HTML tags to the DOM */}
      {/* Rendering JSX elements inside the main App component */}
      <h1>This is my app component</h1>
      <p>Inside app component we have: </p>
      {/* Rendering the Title component */}
      <Title />
      {/* Rendering the Description component */}
      <Description />
      <h3>Hi, {name.toUpperCase()}</h3>
      <hr />
      {/* Rendering ProductTab component where repeated Product components are grouped instead of directly writing them here. */}
      <ProductTab />
      {/* Rendering the Button component. 
          Clicking the button triggers a React event (onClick) 
          which calls the handleOnClick() function defined inside Button.jsx.
      */}
      <Button />
      {/* Rendering the Form component.
          When the form is submitted, React passes an event object to handleFormSubmit,
          and preventDefault() stops the page from refreshing.
      */}
      <Form />
    </>
  );
}

export default App;
