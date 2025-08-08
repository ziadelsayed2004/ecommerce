import Slider from "react-slick";
import BannerImg from "../../assets/images/HomeBanner.png"

const HomeBanner = () => {

    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        touchMove: true,
        draggable: true,
    };
  
    return(
        <>
            <div className="homeBannerSection">
                <div className="container">
                    <Slider {...settings}>
                        <div className="item">
                            <img className="w-100" src={BannerImg} alt="Banner" />
                        </div>
                        <div className="item">
                            <img className="w-100" src={BannerImg} alt="Banner" />
                        </div>
                        <div className="item">
                            <img className="w-100" src={BannerImg} alt="Banner" />
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default HomeBanner;