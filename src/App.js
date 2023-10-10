import Header from "./components/header";
import "./App.css"
import SlickSlider from "./components/Slider";
import DynamicText from "./components/dynamicText";
import ListBar from "./components/listBar";

function App() {
  return (
    <>
      {/* <Header/> */}
      <div className="product1">
        <SlickSlider />
        <div className="firstHeader">
          <Header />
          <ListBar/>
          <DynamicText/>
        </div>
      </div>
    </>
  );
}

export default App;
