import React, { useEffect, useState } from "react";

export const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);

      const response = await fetch(getUrl);
      const data = response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.messge);
      set
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, []);

  return <div>ImageSlider</div>;
};
