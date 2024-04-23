import { useEffect, useState } from "react";

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
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return <div>Loading data, please wait</div>
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>
  }

  return <div>ImageSlider</div>;
};
