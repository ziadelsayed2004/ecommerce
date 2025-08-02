import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import React from 'react';
import Logo from "../../assets/images/logo.png";
import { SlSizeFullscreen } from "react-icons/sl";
import { GrFavorite } from "react-icons/gr";
import ProductModel from '../ProductModel';

const ProductItem = () => {
    const [isOpenProductModel, setIsOpenProductModel] = React.useState(false);
    const viewProductDetailes = (id) => {
        setIsOpenProductModel(true);
    }
    const closeProductModel = () => {
        setIsOpenProductModel(false);
    }
    
    return(
        <>
            <ProductModel closeProductModel= {closeProductModel} isOpenProductModel= {isOpenProductModel} />
            <div className="item productItem cursor-pointer">
                <div className="imgWrapper">
                    <img className="w-100" src={Logo} alt="ProductImg"></img>
                    <span className="badge badge-primary">30%</span>
                    <div className="actions d-flex">
                        <Button onClick={()=>viewProductDetailes(1)}><SlSizeFullscreen /></Button>
                        <Button><GrFavorite /></Button>
                    </div>
                </div>
                <h4>Product Name</h4>
                <span className="text-success d-block">In Stock</span>
                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                <div className="d-flex align-items-center">
                    <span className="oldPrice">$20.00</span>
                    <span className="netPrice text-danger ml-2">$12.50</span>
                </div>
            </div>
        </>
    )
}

export default ProductItem;