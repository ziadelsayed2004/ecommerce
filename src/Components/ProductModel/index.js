import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Rating from '@mui/material/Rating';
import React from 'react';

import { IoClose } from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModel = (props) => {
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
                <hr></hr>
            </Dialog>            
        </>
    )
}

export default ProductModel;