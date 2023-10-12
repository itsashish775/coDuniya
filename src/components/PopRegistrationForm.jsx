import user from "../assets/images/user.png"
import peperpen from "../assets/images/peperpen.png"
import CustomRegistation from "./CustomRegistation"

const PopRegistrationForm = ({ setVal }) => {
    let data = ["Brochure Details", "Check Detailed Fees", "Shortlist & Apply", "24/7 Counselling", "Scholarships", "Application Deadlines"]

    let items = data.map((n, i) => {
        return (
            <div className="card1" key={i}>
                <div className="image">
                    <img src={user} alt="" />
                </div>
                <div className="text">{n}</div>
            </div>
        )
    })
    return (
        <>
            <div className="bgBlur">
                <div className="pop_up">
                    <div className="left">
                        <div className="heading">
                            How Collegedunia helps you in Admission
                        </div>
                        <div className="cardSection">
                            {items}
                        </div>
                    </div>
                    <div className="right">
                        <div className="cross" onClick={() => setVal(val => !val)} > X</div>
                        <div className="right-header">
                            <div className="image">
                                <img src={peperpen} alt="" />
                            </div>
                            <div className="text">
                                <h1>Register Now To Apply</h1>
                                <p>Get details and latest updates</p>
                            </div>
                        </div>
                        <CustomRegistation setVal={setVal} />
                    </div>
                </div >
            </div>
        </>
    )
}
export default PopRegistrationForm;