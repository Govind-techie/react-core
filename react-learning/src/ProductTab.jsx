import Product from "./Product.jsx";

function ProductTab() {
  return (
    <div>
      <Product />
      <Product />
      <Product />
      {/* These repeated Product components are organized here inside ProductTab to maintain clean structure in App.jsx. */}
    </div>
  );
}

export default ProductTab;
