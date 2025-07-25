import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import Slide from '@mui/material/Slide';

import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = ()=>{
    
    const [isOpenModel, setIsOpenModel] = React.useState(false);

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
                <h4>Choose Your Location</h4>
                <p>Enter Your Location To Get Your Offers</p>
                <Button className='close_' onClick={()=>setIsOpenModel(false)}><IoClose /></Button>
                <div className='headerSearch ml-3 mr-3'>
                    <input type='text' placeholder='Search Your Area...' />
                    <Button><IoSearch /></Button>
                </div>
                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Egypt</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Sudia Arabia</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Qatar</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Egypt</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Sudia Arabia</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Qatar</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Egypt</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Sudia Arabia</Button></li>
                    <li><Button onClick={()=>setIsOpenModel(false)}>Qatar</Button></li>
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;