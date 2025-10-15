import Slider from "react-slick";
import Button from '@mui/material/Button';
import ProductItem from "../../../Components/ProductItem";

import { FaArrowRightLong } from "react-icons/fa6";

const RelatedProduct = (props) => {
    
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
    responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        },
    ],
    };

    return(
        <>
            <div className="col-md-12 ProductRow pt-5 mb-5 mt-5">
                <div className="d-flex align-items-center RelatedProducts">
                    <div className="info w-60">
                        <h3 className="mb-2">{props.title}</h3>
                        <p>{props.description}</p>
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
        </>
    )
}

export default RelatedProduct;