import "./App.css";
import { ImageSlider } from "./components/image-slider";
// import { Accordian } from "./components/accordian";
// import { RandomColor } from "./components/random-color";
// import { StarRating } from "./components/star-rating";

function App() {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStar={10} /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} />
    </div>
  );
}

export default App;
