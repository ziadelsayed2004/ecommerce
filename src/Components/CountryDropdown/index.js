import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react';

import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

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

            <Dialog className='locationModel' onClose={()=>setIsOpenModel(false)} open={isOpenModel}>
                <h4>Choose Your Location</h4>
                <p>Enter Your Location To Get Your Offers</p>
                <Button className='close_' onClick={()=>setIsOpenModel(false)}><IoClose /></Button>
                <div className='headerSearch ml-3 mr-3'>
                    <input type='text' placeholder='Search Your Area...' />
                    <Button><IoSearch /></Button>
                </div>
                <ul className='countryList mt-3'>
                    <li><Button>Egypt</Button></li>
                    <li><Button>Sudia Arabia</Button></li>
                    <li><Button>Qatar</Button></li>
                    <li><Button>Egypt</Button></li>
                    <li><Button>Sudia Arabia</Button></li>
                    <li><Button>Qatar</Button></li>
                    <li><Button>Egypt</Button></li>
                    <li><Button>Sudia Arabia</Button></li>
                    <li><Button>Qatar</Button></li>
                    <li><Button>Egypt</Button></li>
                    <li><Button>Sudia Arabia</Button></li>
                    <li><Button>Qatar</Button></li>
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;