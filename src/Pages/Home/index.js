import Slider from "react-slick";
import Button from '@mui/material/Button';
import HomeBanner from "../../Components/HomeBanner";
import HomeCat from "../../Components/HomeCat";
import ProductItem from "../../Components/ProductItem";
import Footer from "../../Components/Footer";
import ProductImg from "../../assets/images/ProductBanner.png";
import NewProductImg from "../../assets/images/NewProductBanner.png";
import newsLetter from "../../assets/images/newsLetter.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


const Home = () =>{

    var ProductSliderOptions = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    draggable: true,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
    };

    return(
        <>
            <HomeBanner />                        
            <HomeCat />
            
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={ProductImg} alt="ProductBanner" />
                                <Button className='ExploreNowBtn'>Explore Now</Button>
                            </div>
                            <div className="banner">
                                <img src={NewProductImg} className="pt-5" alt="NewProductBanner" />
                                <Button className='ExploreNewBtn'>Explore Now</Button>
                            </div>
                        </div>
                        <div className="col-md-9 ProductRow pt-5">
                            <div className="d-flex align-items-center BestProducts">
                                <div className="info w-60">
                                    <h3>Best Sellers</h3>
                                    <p>Do not miss the current offers and sales !</p>
                                </div>
                                <Button className='ViewAllBtn ml-auto'>View All<FaArrowRightLong /></Button>
                            </div>

                            <div className="prduct_row w-100">
                                <Slider className="productSlider" {...ProductSliderOptions}>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </Slider>
                            </div>

                            <div className="d-flex align-items-center BestProducts pt-5">
                                <div className="info w-60">
                                    <h3>New Products</h3>
                                    <p>Do not miss the new items we published !</p>
                                </div>
                                <Button className='ViewAllBtn ml-auto'>View All<FaArrowRightLong /></Button>
                            </div>

                            <div className="prduct_row w-100">
                                <Slider className="productSlider" {...ProductSliderOptions}>
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                    <ProductItem />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3">
                <div className="container d-flex align-items-center w-100">
                    <div className="row w-100 align-items-center">
                        <div className="col-md-6">
                            <p className="text-white mb-0">$20 discount for your first order</p>
                            <h3 className="text-white">Join our news letter and get...</h3>
                            <p className="text-gray">Join our email subscription now to get updateson <br/>promotions and coupons.</p>
                            <form>
                                <MdOutlineMailOutline />
                                <input type="text" placeholder="Your Email Address" />
                                <Button>Subscripe</Button>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <img className="w-100" src={newsLetter} alt="newsLetter"></img>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home;