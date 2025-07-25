import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const countryDropdown = ()=>{
    return (
        <>
            <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>Egypt</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog className='locationModel' open={true}>
                <h4>Choose Your Location</h4>
                <p>Enter Your Location To Get Your Offers</p>
                <div className='headerSearch ml-3 mr-3'>
                    <input type='text' placeholder='Search Your Area...' />
                    <Button><IoSearch /></Button>
                </div>
            </Dialog>
        </>
    )
}

export default countryDropdown;