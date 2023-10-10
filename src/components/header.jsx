import logo from "../assets/images/logo.png"
import user from "../assets/images/user.png"
import { BsPencil } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";
import { AiOutlineBell } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { PiGraduationCapLight } from "react-icons/pi";
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <div className="image">
                        <img src={logo} alt="image" />
                    </div>
                </div>
                <div className="goal_city">
                    <p className="goalText"><PiGraduationCapLight/> Select Goal & <GoLocation/> City</p>
                    <select name="" id="">
                        <option value="">Select Goal</option>
                    </select>
                </div>
                <div className="serchBox">
                    <input type="text" placeholder="Search for Colleges, Exams, Courses and More.." />
                </div>
                <div className="review">
                    <div className="reviewSection icon">
                        <BsPencil />
                    </div>
                    <div>
                        <p>Write a Review</p>
                        <div className="btn">Get Upto ₹500*</div>
                    </div>
                </div>
                <div className="explore">
                    <div className="explore_section">
                        <div className="icon">
                            <CgMenuGridO />
                        </div>
                        <div>Expolre</div>
                    </div>
                </div>
                <div className="notification">
                    <div className=" bellIcon">
                        <AiOutlineBell />
                    </div>
                </div>
                <div className="manuSection">
                    <div className="icon">
                        <CgMenu />
                    </div>
                    <div className="userImage">
                        <img src={user} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;