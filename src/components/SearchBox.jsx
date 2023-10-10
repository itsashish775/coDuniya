import { BsSearch } from "react-icons/bs";
const SearchBox = () => {
  return (
    <>
      <div className="serchSection">
        <div className="serchBox">
          <div style={{ fontSize: "25px" }}>
            <BsSearch />
          </div>
          <input
            type="text"
            placeholder="Search for Colleges, Exams, Courses and More.."
          />
        </div>
        <div className="searchBtn">Search</div>
      </div>
      <div className="butSearchSection">
        <div className="searchBtn1">Search</div>
      </div>
    </>
  );
};

export default SearchBox;
