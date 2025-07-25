import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react';

import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const CountryDropdown = ()=>{

    const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button className='countryDrop'  onClick={handleClickOpen}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>Egypt</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog className='locationModel' open={open} onClose={handleClose}>
                <h4>Choose Your Location</h4>
                <p>Enter Your Location To Get Your Offers</p>
                <div className='headerSearch ml-3 mr-3'>
                    <input type='text' placeholder='Search Your Area...' />
                    <Button><IoSearch /></Button>
                </div>
                <ul className='countryList'>
                    <li><Button>Egypt</Button></li>
                    <li><Button>Sudia Arabia</Button></li>
                    <li><Button>Qatar</Button></li>
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;