import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import React, { useContext } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from '../QuantityBox';

import Logo from "../../assets/images/logo.png";
import { IoClose } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { IoIosGitCompare } from "react-icons/io";
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModel = () => {
    const [slideIndex, SetSlideIndex] = React.useState(0);
    const zoomSlider = React.useRef();
    const zoomSliderBig = React.useRef();

    const goto = (index) => {
        SetSlideIndex(index);
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
        afterChange: (current) => {
            SetSlideIndex(current);
            zoomSlider.current?.slickGoTo(current); 
        },
    };

    const context = useContext(MyContext);
    
    return(    
        <>
            <Dialog className='ItemModel' TransitionComponent={Transition} open={context.isOpenProductModel} onClose={()=> context.setIsOpenProductModel(false)}>
                <Button className='close_' onClick={()=> context.setIsOpenProductModel(false)}><IoClose /></Button>
                <div className='container m-0'>
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
                    <div className='productContanierScrollableModel'>
                        <div className='row mt-2 ProductDetailsModel'>
                            <div className='col-md-5'>
                                <div className='productZoom'>
                                    <span className="badge badge-primary ml-2 mt-2">30%</span>
                                    <Slider {...settings} className='zoomSliderBig' ref={zoomSliderBig}>
                                        <div className='item'>
                                            <InnerImageZoom zoomType='hover' zoomScale={0.25} src={Logo} />
                                        </div>
                                        <div className='item'>
                                            <InnerImageZoom zoomType='hover' zoomScale={0.25} src={Logo} />
                                        </div>
                                        <div className='item'>
                                            <InnerImageZoom zoomType='hover' zoomScale={0.25} src={Logo} />
                                        </div>
                                        <div className='item'>
                                            <InnerImageZoom zoomType='hover' zoomScale={0.25} src={Logo} />
                                        </div>
                                    </Slider>
                                </div>

                                <Slider {...IndexSettings} className='zoomSlider' ref={zoomSlider}>
                                    <div className='item'>
                                        <img src={Logo} className={`w-100 ${slideIndex===0 && 'item_active'}`} alt='item' onClick={() => goto(0)} />
                                    </div>
                                    <div className='item'>
                                        <img src={Logo} className={`w-100 ${slideIndex===1 && 'item_active'}`} alt='item' onClick={() => goto(1)} />
                                    </div>
                                    <div className='item'>
                                        <img src={Logo} className={`w-100 ${slideIndex===2 && 'item_active'}`} alt='item' onClick={() => goto(2)} />
                                    </div>
                                    <div className='item'>
                                        <img src={Logo} className={`w-100 ${slideIndex===3 && 'item_active'}`} alt='item' onClick={() => goto(3)} />
                                    </div>
                                </Slider>
                            </div>
                            <div className='col-md-7'>
                                <div className='d-flex align-items-center'>
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$12.50</span>
                                </div>
                                
                                <span className="text-success InStockSpan d-block mt-2">In Stock</span>
                                
                                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                
                                <div className='d-flex align-items-center Quantity'>
                                    <QuantityBox className='mt-2' />
                                    <Button className='addToCartBtn mt-2'>Add To Cart</Button>
                                </div>

                                <div className='d-flex align-items-center mt-3 pt-3 pb-3 actions'>
                                    <Button variant='outline' className='addToWishBtn mr-2 mt-2'>Add To Wishlist<GrFavorite className='ml-1' /></Button>
                                    <Button variant='outline' className='compareProducts mt-2'>Compare<IoIosGitCompare className='ml-1' /></Button>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>            
        </>
    )
}

export default ProductModel;