import { FaStar } from "react-icons/fa";

export const index = ({ noOfStar = 5 }) => {
    const [ra]

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