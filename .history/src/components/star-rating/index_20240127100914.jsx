import { FaStar } from "react-icons/fa";

export const starRating = ({ noOfStar = 5 }) => {
    const [rating,setRating] = use

  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        return <FaStar 
            key={index}
            onClick={}
            onMouseMove={}
            onMouseLeave={}
            size={40}
        />;
      })}
    </div>
  );
};