import college1 from "../assets/images/college1.jpg"
import user from "../assets/images/user.png"
const SchoolSection = () => {
    let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1,2,4]
    let items = arr.map((n, i) => {
        return (
            <>
                <div className="college_Card1">
                    <div className="collage_card">
                        <img src={college1} alt="" />
                    </div>
                    <div className="card_data">
                        <div className="text">Best B.tech Colleges in India</div>
                        <div>
                            <div className="indexedImg">
                                <div className="allImage1 allImage">
                                    <img src={user} alt="image" />
                                </div>
                                <div className="allImage2 allImage">
                                    <img src={user} alt="image" />
                                </div>
                                <div className="allImage3 allImage">
                                    <img src={user} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <div className="CollegeSection">
                <h1>Top Collections for BE/B.Tech</h1>
                <div className="listItemCollege">
                    {items}
                </div>
            </div>
            
        </>
    )
}

export default SchoolSection;