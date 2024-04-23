import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ noOfStar }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurentIndex) => {
    console.log(first)
    setRating(getCurentIndex);
  };

  const handleMouseEnter = (getCurentIndex) => {
    setHover(getCurentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => {
              handleClick(index);
            }}
            onMouseMove={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
            size={40}
          />
        );
      })}
    </div>
  );
};
