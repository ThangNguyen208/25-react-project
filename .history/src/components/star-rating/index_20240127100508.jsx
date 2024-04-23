export const index = ({noOfStar = 5}) => {
  return <div className="star-rating">
    {[...Array(noOfStar)].map(())}
  </div>;
};