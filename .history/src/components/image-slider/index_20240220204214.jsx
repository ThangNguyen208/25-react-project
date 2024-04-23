import React, { useEffect, useState } from "react";

export const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  cons

  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(getUrl);
      const data = response.json();

      if (data) {
        setImages(data);
      }
    } catch (error) {
      setErrorMsg(error.messge);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, []);

  return <div>ImageSlider</div>;
};
