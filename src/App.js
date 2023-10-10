import Header from "./components/header";
import "./App.css"
import SlickSlider from "./components/Slider";

function App() {
  return (
    <>
      {/* <Header/> */}
      <div className="product1">
        <SlickSlider />
        <div className="firstHeader">
          <Header />
        </div>
      </div>
    </>
  );
}

export default App;
