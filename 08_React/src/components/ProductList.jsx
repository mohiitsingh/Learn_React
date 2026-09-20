import { useCallback, useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/products");

  const fetchProducts = useCallback(async() => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }, [url]);
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section>
      <button onClick={() => setUrl("http://localhost:3000/products")}>
        All
      </button>
      <button
        onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}
      >
        In Stock
      </button>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid whitesmoke", padding: "10px" }}
        >
          <p>{product.name}</p>
          <p>
            <span>{product.price} </span>
            <span>{product.in_stock ? "In Stock" : "Unavailable"}</span>
          </p>
        </div>
      ))}
    </section>
  );
}
