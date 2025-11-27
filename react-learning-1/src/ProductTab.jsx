// ProductTab is the parent component that sends data to the Product component using React props.
import Product from "./Product.jsx";

function ProductTab() {
  let options = ["durable", "fast"];
  // We are storing multiple values inside an array. This array will be passed as a prop to the Product component.
  // React allows passing arrays as props, and the child component can loop through (map) these values to render UI elements.
  // Here, 'options' contains a list of product features that the Product component will display.
  return (
    <div>
      {/* React Props: These values ('title' and 'price') are passed from the parent (ProductTab) to each Product component. 
          Props allow us to reuse the same component with different data inputs. */}
      {/* Passing different props to reuse the Product component with various product details. */}
      {/*
      Passing the 'options' array as a prop named 'features'. The Product component will receive it and render each item.
      Arrays must be passed inside curly braces {} so React recognizes them as JavaScript values. 
      */}
      <Product title="laptop" price={79999} features={options}/>
      {/* In React, curly braces {} allow us to pass JavaScript values (like numbers, variables, or expressions) as props. 
    Here, the price is passed as a number so we can perform JS operations on it if needed. */}
      <Product title="phone" price={20000}/>
      <Product title="tablet" price={15999} />
      {/* These repeated Product components are organized here inside ProductTab to maintain clean structure in App.jsx. */}
    </div>
  );
}

export default ProductTab;
