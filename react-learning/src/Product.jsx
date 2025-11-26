// Each React component is placed in its own .jsx file, and its styling is kept in a separate .css file for better structure and maintainability.
import "./Product.css";

// This component has its own dedicated JSX file (Product.jsx) and a matching CSS file (Product.css).
// Product component represents a single product UI block that can be reused multiple times.

// React Props: The Product component receives 'title' and 'price' as props from its parent (ProductTab.jsx). Props allow components to be dynamic and reusable with different data.
function Product({ title, price = 1, features = [] }) {
  // We receive 'features' here as an array because the parent (ProductTab) passed it as a prop.
  // Default value [] ensures map() works even if no array is provided.
    return (
    <div className="Product">
      <h3>{title}</h3>
      <h4>Price: {price}</h4>
      <p>
        {/* Rendering array values: */}
        {/* 'features' is an array, and we use .map() to loop over each item and create <li> elements for them. */}
        {/* map() returns a NEW array of JSX elements, which React can render directly. */}
        {/* Each array element becomes one <li> item inside the UI. */}
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </p>
    </div>
  );
}

export default Product;
