import user from "../assets/images/user.png"
import Slider from "react-slick";
import { CgArrowLeft } from "react-icons/cg";
import { CgArrowRight } from "react-icons/cg";
const StudyGoals = () => {
  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    // autoplay: true,
    centerMode: true,
    // centerPadding: '25%',
    slidesToScroll: 3,
    nextArrow: <CgArrowRight/>,
    prevArrow: <CgArrowLeft/>,
    initialSlide: 1,
  };
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  let items = arr.map((n, i) => {
    return (
      <>
        <div className="card" key={i}>
          <div className="cardHead">
            <div className="cardLogo">
              <img src={user} alt="image" />
            </div>
            <div className="headerText">
              <h3>Engineering</h3>
              <p>6141 colleges</p>
            </div>
          </div>
          <div className="course_list">
            <div className="courseItem">BE/B.Tech</div>
            <div className="courseItem">Deploma in Engineering</div>
            <div className="courseItem">ME/M.Tech</div>
          </div>
        </div>
      </>
    )
  })
  return <>
    <div className="goal_section1">
      <h1>Select Your Study Goal</h1>
      <div className="goal_section">
        <Slider {...settings}>
          {items}
        </Slider>
      </div>
    </div>
  </>;
};
export default StudyGoals;
