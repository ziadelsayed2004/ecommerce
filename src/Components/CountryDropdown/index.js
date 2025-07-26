import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React, { useContext, useEffect } from 'react';
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
    const [selectedTab, setSelectedTab] = React.useState(null);
    const [egyptCities, setEgyptCities] = React.useState([]);
    const context = useContext(MyContext);
    const selectCity = (index,city) => {
        setSelectedTab(index);
        context.setSelectedCity(city);
        setIsOpenModel(false);
    }
    useEffect(() => {
        setEgyptCities(context.egyptCities);
    }, [context.egyptCities]);
    const filterList = (e)=> {
        const keyword = e.target.value.toLowerCase();
        if(keyword!==""){
            const list  = egyptCities.filter((item)=>{
                return item.city.toLowerCase().includes(keyword);
            });
            setEgyptCities(list);
        } else {
            setEgyptCities(context.egyptCities);
        }
    }

    return (
        <>
            <Button className='countryDrop'  onClick={()=>setIsOpenModel(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{context.selectedCity!=="" ? context.selectedCity.length > 10 ? context.selectedCity?.substr(0,10) + '..' : context.selectedCity : "Select A City"}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog className='locationModel' TransitionComponent={Transition} onClose={()=>setIsOpenModel(false)} open={isOpenModel}>
                <h4>Choose Your City</h4>
                <p>Enter Your Location For Shipping</p>
                <Button className='close_' onClick={()=>setIsOpenModel(false)}><IoClose /></Button>
                <div className='headerSearch ml-3 mr-3'>
                    <input type='text' placeholder='Search Your Area...' onChange={filterList} />
                    <Button><IoSearch /></Button>
                </div>
                <ul className='countryList mt-3'>
                    { 
                        egyptCities?.length !== 0 && egyptCities?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => selectCity(index,item.city)} className={`${selectedTab === index ? 'active' : ''}`} >
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