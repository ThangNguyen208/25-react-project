import React, { useEffect, useState } from "react";

export const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchImages = async (getUrl) => {
    try {
      const response = await fetch(getUrl);
      const data = response.json();
    } catch (error) {
      setErrorMsg(error.messge);
    }
  };

  useEffect(() => {})

  return <div>ImageSlider</div>;
};
