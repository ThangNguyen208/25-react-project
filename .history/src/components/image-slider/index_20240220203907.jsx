import React, { useState } from "react";

export const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchImages = async (get) => {
    try {
      const result = await doSomethingAsync();
      console.log(result);
    } catch (error) {
      setErrorMsg(error.messge)
    }
  };
  

  return <div>ImageSlider</div>;
};
