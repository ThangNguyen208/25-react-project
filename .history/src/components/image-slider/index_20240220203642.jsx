import React, { useState } from "react";

export const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg,setErrorMsg] = useState(null)

  return <div>ImageSlider</div>;
};
