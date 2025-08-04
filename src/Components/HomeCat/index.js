import Slider from "react-slick";
import CatImg from "../../assets/images/logo.png";

const HomeCat = () => {

    var CatSlider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipe: true,
    touchMove: true,
    draggable: true,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
        },
        },
        {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
    };
 
    return(
        <>
            <section className="homeCat d-none">
                <div className="container">
                    <h3>Categories</h3>
                    <p>Chech Our Featured Categories</p>
                    <Slider className="CatSlider w-100" {...CatSlider}>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 1</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 2</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 3</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 4</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 5</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 6</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 7</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 8</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 9</h6>
                        </div>
                        <div className="item d-flex justify-content-center cursor-pointer">
                            <img src={CatImg} alt="CatImg" />
                            <h6>Category 10</h6>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default HomeCat;