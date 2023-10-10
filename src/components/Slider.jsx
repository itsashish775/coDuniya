import Slider from "react-slick";
import wallpaper from "../assets/images/img.jpg"
import wallpaper1 from "../assets/images/img1.jpg"
import wallpaper2 from "../assets/images/img2.jpg"

const SlickSlider = (props) => {
    // console.log("==========>", props.data);
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1
    };
    let arr = [wallpaper, wallpaper1, wallpaper2]
    let items = arr.map((n, i) => {
        return (
            <>
                <div className="product" key={i}>
                    <div className="bgimage">
                        <img src={n} alt="image" />
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <Slider {...settings}>
                {items}
            </Slider>
        </>
    )
}
export default SlickSlider;