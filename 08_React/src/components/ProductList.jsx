import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function ProductList() {
  const [url, setUrl] = useState("http://localhost:3000/products");
  const {data: products} = useFetch(url);

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
      {products && products.map((product) => (
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
