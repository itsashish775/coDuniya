import user from "../assets/images/user.png"

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
                </div>
            </div >
        </>
    )
}
export default PopRegistrationForm;