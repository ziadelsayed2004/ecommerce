/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

import ProductZoom from '../../Components/ProductModel/ProductZoom';
import QuantityBox from '../../Components/ProductModel/QuantityBox';

import Logo from '../../assets/images/logo.png'
import { FaCartPlus } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { IoIosGitCompare } from "react-icons/io";

const ProductDetails = () => {
    const [activeSize, setActiveSize] = React.useState(null);
    const isActive = (index) => {
        setActiveSize(index)
    }
    const [activeTabs, setActiveTabs] = React.useState(0);

    return(
        <>
            <section className="productDetails section">
                <div className="container pt-4">
                    <div className='d-flex ItemModel mb-5'>
                        <div className='ProductDetailsZoom'>
                            <div className='d-block d-md-none mb-3'>
                                <h4 className='mb-2 mt-2 hd text-capitalize'>Product Name</h4>
                                <ul className="list list-inline d-flex flex-wrap">
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
                            </div>
                            <ProductZoom />
                        </div>
                        <div className='ProductDetailsModel'>
                            <div className='d-none d-md-block'>
                                <h4 className='mb-2 mt-2 hd text-capitalize'>Product Name</h4>
                                <ul className="list list-inline d-flex flex-wrap">
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
                            </div>                 
                            <hr />
                            <div className='d-flex align-items-center pt-3'>
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-2">$12.50</span>
                            </div>                         
                            <span className="text-success InStockSpan d-block mt-2">In Stock</span>                  
                            <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                                <Button className='addToCartBtn mt-2'>Add To Cart <FaCartPlus className='ml-1' /></Button>
                            </div>
                            <div className='d-flex align-items-center mt-3 pl-2 pt-3 pb-3 actions'>
                                <Button variant='outline' className='addToWishBtn mr-2 mt-2'>Add To Wishlist<GrFavorite className='ml-1' /></Button>
                                <Button variant='outline' className='compareProducts mt-2'>Compare<IoIosGitCompare className='ml-1' /></Button>                                
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className='card mt-5 detailsPageTabs'>
                        <div className='customTabs'>
                            <ul className='list list-inline p-3'>
                                <li className='list-inline-item'>
                                    <Button variant='outline' className={`${activeTabs === 0 && 'active'}`} onClick={()=> setActiveTabs(0)} >Description</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button variant='outline' className={`${activeTabs === 1 && 'active'}`} onClick={()=> setActiveTabs(1)} >information</Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button variant='outline' className={`${activeTabs === 2 && 'active'}`} onClick={()=> setActiveTabs(2)} >Reviews</Button>
                                </li>
                            </ul>

                            <br />

                            {
                                activeTabs === 0 &&
                                <div className='tabContent p-3'>
                                    <p><strong>Product Long Description :</strong><br />Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div> 
                            }
                            
                            {
                                activeTabs === 1 &&
                                <div className='tabContent p-3'>
                                    <div className='table-responsive'>
                                        <table className='table table-bordered'>
                                            <tbody>
                                                <tr className='tr-item'>
                                                    <th>Head 1</th>
                                                    <td>
                                                        <p>Content 1</p>
                                                    </td>
                                                </tr>
                                                <tr className='tr-item'>
                                                    <th>Head 2</th>
                                                    <td>
                                                        <p>Content 2</p>
                                                    </td>
                                                </tr>
                                                <tr className='tr-item'>
                                                    <th>Head 3</th>
                                                    <td>
                                                        <p>Content 3</p>
                                                    </td>
                                                </tr>
                                                <tr className='tr-item'>
                                                    <th>Head 4</th>
                                                    <td>
                                                        <p>Content 4</p>
                                                    </td>
                                                </tr>
                                                <tr className='tr-item'>
                                                    <th>Head 5</th>
                                                    <td>
                                                        <p>Content 5</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div> 
                            }

                            {
                                activeTabs === 2 &&
                                <div className='tabContent p-3'>
                                    <div className='card p-4 reviewsCard flex-row'>
                                        <div className='flex-col w-75'>
                                            <div className='card flex-col p-4 mb-2 w-100'>
                                                <div className='d-flex flex-row w-100'>
                                                    <div className='image w-40'>
                                                        <div className='rounded-circle'>
                                                            <img src={Logo} alt='Review-Img'></img>
                                                            <span className='text-g d-block text-center font-weight-bold'>User Name</span>
                                                        </div>
                                                    </div>
                                                    <div className='info pl-4 w-60'>
                                                        <div className='d-flex align-items-center w-100'>
                                                            <h5 className='ratingDate'>01/01/2025</h5>
                                                            <div className='ml-auto'>
                                                                <Rating name='half-rating-read' value={4.5} precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='w-100 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                            <div className='card flex-col p-4 mb-2 w-100'>
                                                <div className='d-flex flex-row w-100'>
                                                    <div className='image w-40'>
                                                        <div className='rounded-circle'>
                                                            <img src={Logo} alt='Review-Img'></img>
                                                            <span className='text-g d-block text-center font-weight-bold'>User Name</span>
                                                        </div>
                                                    </div>
                                                    <div className='info pl-4 w-60'>
                                                        <div className='d-flex align-items-center w-100'>
                                                            <h5 className='ratingDate'>01/01/2025</h5>
                                                            <div className='ml-auto'>
                                                                <Rating name='half-rating-read' value={4.5} precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='w-100 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                            <div className='card flex-col p-4 mb-2 w-100'>
                                                <div className='d-flex flex-row w-100'>
                                                    <div className='image w-40'>
                                                        <div className='rounded-circle'>
                                                            <img src={Logo} alt='Review-Img'></img>
                                                            <span className='text-g d-block text-center font-weight-bold'>User Name</span>
                                                        </div>
                                                    </div>
                                                    <div className='info pl-4 w-60'>
                                                        <div className='d-flex align-items-center w-100'>
                                                            <h5 className='ratingDate'>01/01/2025</h5>
                                                            <div className='ml-auto'>
                                                                <Rating name='half-rating-read' value={4.5} precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='w-100 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                            <div className='card flex-col p-4 mb-2 w-100'>
                                                <div className='d-flex flex-row w-100'>
                                                    <div className='image w-40'>
                                                        <div className='rounded-circle'>
                                                            <img src={Logo} alt='Review-Img'></img>
                                                            <span className='text-g d-block text-center font-weight-bold'>User Name</span>
                                                        </div>
                                                    </div>
                                                    <div className='info pl-4 w-60'>
                                                        <div className='d-flex align-items-center w-100'>
                                                            <h5 className='ratingDate'>01/01/2025</h5>
                                                            <div className='ml-auto'>
                                                                <Rating name='half-rating-read' value={4.5} precision={0.5} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='w-100 pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                        </div>

                                        <form className='reviewForm pl-4 pr-4 w-25'>
                                            <div className='form-group'>
                                                <textarea className='form-control' placeholder='Write a Review' name='review'></textarea>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <input type='text' className='form-control' placeholder='Name' name='userName' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <Rating name='rating' value={4.5} precision={0.5} />
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className='form-group'>
                                                <Button type='submit' className='btn-g btn-lg'>Submit Review</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div> 
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductDetails;