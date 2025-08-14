/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Rating from '@mui/material/Rating';
import React, { useContext } from 'react';

import 'react-inner-image-zoom/lib/styles.min.css';
import QuantityBox from './QuantityBox';

import { IoClose } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { IoIosGitCompare } from "react-icons/io";
import { MyContext } from '../../App';
import ProductZoom from './ProductZoom';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModel = () => {
    const [activeSize, setActiveSize] = React.useState(null);
    const isActive = (index) => {
        setActiveSize(index)
    }
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
                                <ProductZoom />
                            </div>
                            <div className='col-md-7'>
                                <div className='d-flex align-items-center'>
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$12.50</span>
                                </div>
                                
                                <span className="text-success InStockSpan d-block mt-2">In Stock</span>
                                
                                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                
                                <div className='productSize d-flex align-items-center'>
                                    <span>Size / Weight :</span>
                                    <ul className='list list-inline mb-0 pl-2'>
                                        <li className='list-inline-item'>
                                            <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>100g</a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a className={`tag ${activeSize === 1 ? 'active' : ''}`}onClick={() => isActive(1)}>200g</a>
                                        </li>
                                        <li className='list-inline-item'>
                                            <a className={`tag ${activeSize === 2 ? 'active' : ''}`}onClick={() => isActive(2)}>300g</a>
                                        </li>
                                    </ul>
                                </div>  

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