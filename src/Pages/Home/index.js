import Slider from "react-slick";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import HomeBanner from "../../Components/HomeBanner";

import Logo from "../../assets/images/logo.png";
import ProductImg from "../../assets/images/ProductBanner.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () =>{

    var ProductSliderOptions = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: true,
        touchMove: true,
        draggable: true,
    };

    return(
        <>
            <HomeBanner />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={ProductImg} className="cursor-pointer" alt="ProductBanner" />
                            </div>
                        </div>
                        <div className="col-md-9 ProductRow">
                            <div className="d-flex align-items-center BestProducts">
                                <div className="info w-60">
                                    <h3>Best Sellers</h3>
                                    <p>Do not miss the current offers and sales !</p>
                                </div>
                                <Button className='ViewAllBtn ml-auto'>View All<FaArrowRightLong /></Button>
                            </div>

                            <div className="prduct_row w-100">
                                <Slider className="productSlider" {...ProductSliderOptions}>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img className="w-100" src={Logo} alt="ProductImg"></img>
                                        </div>
                                        <h4>Product Name</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        <div className="d-flex align-items-center">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="netPrice text-danger ml-2">$12.50</span>
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img className="w-100" src={Logo} alt="ProductImg"></img>
                                        </div>
                                        <h4>Product Name</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        <div className="d-flex align-items-center">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="netPrice text-danger ml-2">$12.50</span>
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img className="w-100" src={Logo} alt="ProductImg"></img>
                                        </div>
                                        <h4>Product Name</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        <div className="d-flex align-items-center">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="netPrice text-danger ml-2">$12.50</span>
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img className="w-100" src={Logo} alt="ProductImg"></img>
                                        </div>
                                        <h4>Product Name</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        <div className="d-flex align-items-center">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="netPrice text-danger ml-2">$12.50</span>
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img className="w-100" src={Logo} alt="ProductImg"></img>
                                        </div>
                                        <h4>Product Name</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        <div className="d-flex align-items-center">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="netPrice text-danger ml-2">$12.50</span>
                                        </div>
                                    </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img className="w-100" src={Logo} alt="ProductImg"></img>
                                        </div>
                                        <h4>Product Name</h4>
                                        <span className="text-success d-block">In Stock</span>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                                        <div className="d-flex align-items-center">
                                            <span className="oldPrice">$20.00</span>
                                            <span className="netPrice text-danger ml-2">$12.50</span>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;