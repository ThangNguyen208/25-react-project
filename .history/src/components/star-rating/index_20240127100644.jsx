import { FaStar } from "react-icons/fa";

export const index = ({ noOfStar = 5 }) => {
  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        return <FaStar 
            key={index}
            onC
        />;
      })}
    </div>
  );
};
