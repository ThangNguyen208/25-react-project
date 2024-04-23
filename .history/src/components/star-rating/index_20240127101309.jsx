import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const starRating = ({ noOfStar = 5 }) => {
    const [rating,setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurentIndex) => {

    }

    const handleMouseEnter = (getCurentIndex) => {

    }

    const handleMouseLeave = (getCurentIndex) => {

    }

  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1

        return <FaStar 
            key={index}
            onClick={() => {handleClick(index)}}
            onMouseMove={() => {handleMouseEnter}}
            onMouseLeave={}
            size={40}
        />;
      })}
    </div>
  );
};
