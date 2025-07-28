import Slider from "react-slick";
import Button from '@mui/material/Button';
import HomeBanner from "../../Components/HomeBanner";

import ProductImg from "../../assets/images/ProductBanner.png";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductItem from "../../Components/ProductItem";

const Home = () =>{

    var ProductSliderOptions = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow:3,
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
        </>
    )
}

export default Home;