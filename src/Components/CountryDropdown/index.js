import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React, { useContext } from 'react';
import Slide from '@mui/material/Slide';

import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = ()=>{
    
    const [isOpenModel, setIsOpenModel] = React.useState(false);
    const context = useContext(MyContext);

    return (
        <>
            <Button className='countryDrop'  onClick={()=>setIsOpenModel(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>Egypt</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog className='locationModel' TransitionComponent={Transition} onClose={()=>setIsOpenModel(false)} open={isOpenModel}>
                <h4>Choose Your City</h4>
                <p>Enter Your Location For Shipping</p>
                <Button className='close_' onClick={()=>setIsOpenModel(false)}><IoClose /></Button>
                <div className='headerSearch ml-3 mr-3'>
                    <input type='text' placeholder='Search Your Area...' />
                    <Button><IoSearch /></Button>
                </div>
                <ul className='countryList mt-3'>
                    { 
                        context.egyptCities?.length !== 0 && context.egyptCities?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => setIsOpenModel(false)} >
                                        <span className='cityName'>{item.city}</span>
                                        <span className='shippingPrice'>{item.shippingPrice} EGP</span>
                                    </Button>
                                </li>
                            );
                        }) 
                    }
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;