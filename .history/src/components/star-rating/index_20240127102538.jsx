import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurentIndex) => {
    setRating(getCurentIndex);
  };

  const handleMouseEnter = (getCurentIndex) => {
    console.log(getCurentIndex);
  };

  const handleMouseLeave = (getCurentIndex) => {
    console.log(getCurentIndex);
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
              handleMouseLeave(index);
            }}
            size={40}
          />
        );
      })}
    </div>
  );
};
