import React, { useState } from "react";

export const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchImages = async () => {
    try {
        
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return <div>ImageSlider</div>;
};
