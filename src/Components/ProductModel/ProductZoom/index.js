import React from 'react';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';

import Logo from "../../../assets/images/logo.png";

const ProductZoom = () => {
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
    
    return(
        <>
            <div>
                <div className='productZoom'>
                    <span className="badge badge-primary ml-2 mt-2">30%</span>
                    <Slider {...settings} className='zoomSliderBig' ref={zoomSliderBig}>
                        <div className='item'>
                            <InnerImageZoom zoomType='hover' zoomScale={0.35} src={Logo} />
                        </div>
                        <div className='item'>
                            <InnerImageZoom zoomType='hover' zoomScale={0.35} src={Logo} />
                        </div>
                        <div className='item'>
                            <InnerImageZoom zoomType='hover' zoomScale={0.35} src={Logo} />
                        </div>
                        <div className='item'>
                            <InnerImageZoom zoomType='hover' zoomScale={0.35} src={Logo} />
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
        </>
    )
}

export default ProductZoom;