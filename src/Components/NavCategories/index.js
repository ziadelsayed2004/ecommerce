import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { BiCategoryAlt } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";

const NavCategories = () => {
    const [isOpenSideBarNav, setIsOpenSideBarNav] = React.useState(false);
    return (
        <>
            <div className='catWrapper'>
                <Button className='allCatTab align-items-center' onClick={() => setIsOpenSideBarNav(!isOpenSideBarNav)}>
                    <span className='icon1 mr-2'><IoIosMenu/></span>
                    <span className='text'>All Categories</span>
                    <span className='icon2 ml-2 icon-transition'>{isOpenSideBarNav ? <FaAngleUp key="up" className="icon-fade" /> : <FaAngleDown key="down" className="icon-fade" />}</span>
                </Button>
                <div className={`sideBarNav ${isOpenSideBarNav === true ? 'open' : ''}`}>
                    <ul className='catListSided list-inline'>
                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 1</Button></Link></li>
                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 2</Button></Link></li>
                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 3</Button></Link></li>
                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 4</Button></Link></li>
                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 5</Button></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavCategories;