import { useEffect, useState } from "react";

export const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
        
    } catch (error) {
        console.log(error.massage)
    }
  }

  useEffect(() => {
    fetchProducts();
  });

  return <div>index</div>;
};
