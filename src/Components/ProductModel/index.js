import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import Rating from '@mui/material/Rating';
import React from 'react';

import Logo from "../../assets/images/logo.png";
import { IoClose } from "react-icons/io5";
import Slider from 'react-slick';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModel = (props) => {
    const zoomSlider = React.useRef();
    const zoomSliderBig = React.useRef();

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    var IndexSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    return(
        <>
            <Dialog className='ItemModel' TransitionComponent={Transition} open={props.isOpenProductModel} onClose={()=> props.closeProductModel()}>
                <Button className='close_' onClick={()=> props.closeProductModel()}><IoClose /></Button>
                <h4 className='mb-2 font-weight-bold'>Product Name</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Brands:</span>
                        <span className='ml-2 brandSpan'><b>Brand Name</b></span>
                    </div>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Rating:</span>
                        <Rating className='ml-2 Rating' name="read-only" size='small' value={4.5} precision={0.5} readOnly />
                    </div>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Category:</span>
                        <span className='ml-2 CategorySpan'><b>Category Name</b></span>
                    </div>
                </div>
                <hr/>
                <div className='row mt-2 ProductDetailsModel'>
                    <div className='col-md-5'>

                        <div className='productZoom'>
                            <Slider {...settings} className='zoomSliderBig' ref={zoomSliderBig}>
                                <div className='item'>
                                    <InnerImageZoom zoomType='hover' zoomScale={0.4} src={Logo} />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom zoomType='hover' zoomScale={0.4} src={Logo} />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom zoomType='hover' zoomScale={0.4} src={Logo} />
                                </div>
                                <div className='item'>
                                    <InnerImageZoom zoomType='hover' zoomScale={0.4} src={Logo} />
                                </div>
                            </Slider>
                        </div>

                        <Slider {...IndexSettings} className='zoomSlider' ref={zoomSlider}>
                            <div className='item'>
                                <img src={Logo} className='w-100' alt='item' onClick={() => goto(0)} />
                            </div>
                            <div className='item'>
                                <img src={Logo} className='w-100' alt='item' onClick={() => goto(1)} />
                            </div>
                            <div className='item'>
                                <img src={Logo} className='w-100' alt='item' onClick={() => goto(2)} />
                            </div>
                            <div className='item'>
                                <img src={Logo} className='w-100' alt='item' onClick={() => goto(3)} />
                            </div>
                        </Slider>

                    </div>
                    <div className='col-md-7'>

                    </div>
                </div>

            </Dialog>            
        </>
    )
}

export default ProductModel;