import Header from "./components/header";
import "./App.css"
import SlickSlider from "./components/Slider";
import DynamicText from "./components/dynamicText";
import ListBar from "./components/listBar";
import SearchBox from "./components/SearchBox";
import StudyGoals from "./components/StudyGoals";

function App() {
  return (
    <>
      {/* <Header/> */}
      <div className="product1">
        <SlickSlider />
        <div className="firstHeader">
          <Header />
          <ListBar />
          <DynamicText />
          <SearchBox />
        </div>
        <div className="body">
          <StudyGoals />
        </div>
      </div>
    </>
  );
}

export default App;
