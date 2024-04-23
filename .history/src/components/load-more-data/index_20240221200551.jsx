import { useEffect, useState } from "react";
import "./styles.css";

export const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => {});
        setLoading(false);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Load more products</button>
      </div>
    </div>
  );
};