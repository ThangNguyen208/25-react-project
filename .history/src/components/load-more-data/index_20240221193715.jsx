import { useEffect, useState } from "react";

export const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  return <div>index</div>;
};
