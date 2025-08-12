import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

import ProductZoom from '../../Components/ProductModel/ProductZoom';
import QuantityBox from '../../Components/ProductModel/QuantityBox';

import { GrFavorite } from "react-icons/gr";
import { IoIosGitCompare } from "react-icons/io";

const ProductDetails = () => {
    return(
        <>
            <section className="productDetails section">
                <div className="container pt-4">
                    <h4 className='mb-2 hd text-capitalize'>Product Name</h4>         
                    <ul className="list list-inline d-flex">
                        <li className="list-inline-item d-flex align-items-center mr-2">
                            <span className="text-dark-gray mr-1">Brand:</span>
                            <span className="text-main-gray bold-span">Brand Name</span>
                        </li>    
                        <li className="list-inline-item d-flex align-items-center mr-2">
                            <span className="text-dark-gray mr-1">Rate:</span>
                            <Rating className='Rating' name="read-only" size='small' value={4.5} precision={0.5} readOnly />
                        </li>    
                        <li className="list-inline-item d-flex align-items-center mr-2">
                            <span className="text-dark-gray mr-1">Category:</span>
                            <span className="text-main-gray bold-span">Category Name</span>
                        </li>    
                    </ul>
                    <div className='d-flex ItemModel mb-5'>
                        <div className='ProductDetailsZoom'>
                            <ProductZoom />
                        </div>
                        <div className='ProductDetailsModel'>
                            <div className='d-flex align-items-center pt-5'>
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-2">$12.50</span>
                            </div>
                                
                            <span className="text-success InStockSpan d-block mt-2">In Stock</span>
                                
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            
                            <div className='d-flex align-items-center Quantity'>
                                <QuantityBox className='mt-2' />
                                <Button className='addToCartBtn mt-2'>Add To Cart</Button>
                            </div>

                            <div className='d-flex align-items-center mt-3 pl-2 pt-3 pb-3 actions'>
                                <Button variant='outline' className='addToWishBtn mr-2 mt-2'>Add To Wishlist<GrFavorite className='ml-1' /></Button>
                                <Button variant='outline' className='compareProducts mt-2'>Compare<IoIosGitCompare className='ml-1' /></Button>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;