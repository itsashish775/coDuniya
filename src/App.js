import Header from "./components/header";
import "./App.css"
import SlickSlider from "./components/Slider";
import DynamicText from "./components/dynamicText";
import ListBar from "./components/listBar";
import SearchBox from "./components/SearchBox";
import StudyGoals from "./components/StudyGoals";
import SchoolSection from "./components/SchoolSection";
import PopRegistrationForm from "./components/PopRegistrationForm";
import { useEffect, useState } from "react";

function App() {
  const [val, setVal] = useState(false);
  useEffect(() => {
    setTimeout(() => setVal(true), 10000)
  }, [])
  return (
    <>
      {/* <Header/> */}
      <div className="product1">
        <SlickSlider />
        <div className="firstHeader">
          <Header />
          <ListBar />
          <DynamicText />
          <SearchBox setVal={setVal} />
        </div>
        <div className="body">
          <StudyGoals />
          <SchoolSection />
        </div>

        {val ? <PopRegistrationForm setVal={setVal} /> : ""}
      </div>
    </>
  );
}

export default App;
