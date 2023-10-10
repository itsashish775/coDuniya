import { TbSitemap } from "react-icons/tb";
const ListBar = () => {
  let courses = [
    "B.Tech",
    "MBA",
    "M.Tech",
    "MCA",
    "MBBS",
    "B.Com",
    "B.Sc",
    "B.Sc (Nursing)",
    "BA",
    "BBA",
    "BCA",
  ];
  let items = courses.map((n, i) => (
    <div className="item" key={i}>
      {n}
    </div>
  ));
  return (
    <>
      <div className="header1">
        <div className="listItems">
          <div className="item">
            <TbSitemap />
            All Courdes
          </div>
          {items}
        </div>
        <div className="item">
            <div><span className="pentagon">New</span>Course Finder</div>
        </div>
      </div>
    </>
  );
};

export default ListBar;
