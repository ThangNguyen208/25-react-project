import "./App.css";
import { SearchAutocomplete } from "./components/search-autocomplete-with-api";
// import { ImageSlider } from "./components/image-slider";
// import { LoadMoreData } from "./components/load-more-data";
// import { Accordian } from "./components/accordian";
// import { RandomColor } from "./components/random-color";
// import { StarRating } from "./components/star-rating";

function App() {
  return (
    <div>
      <Accordian /> 
      <RandomColor />
      <StarRating noOfStar={10} />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData />
      <SearchAutocomplete />
    </div>
  );
}

export default App;
