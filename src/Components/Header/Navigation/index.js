import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import React from 'react';

import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BiCategoryAlt } from "react-icons/bi";
import { RiBloggerLine } from "react-icons/ri";
import { FaRegPaperPlane } from "react-icons/fa";


const Navigation = ()=>{
    const [isOpenSideBarNav, setIsOpenSideBarNav] = React.useState(false);

    return (
        <>
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3 navPart1'>
                            <div className='catWrapper'>
                                <Button className='allCatTab align-items-center' onClick={() => setIsOpenSideBarNav(!isOpenSideBarNav)}>
                                    <span className='icon1 mr-2'><IoIosMenu/></span>
                                    <span className='text'>All Categories</span>
                                    <span className='icon2 ml-2 icon-transition'>{isOpenSideBarNav ? <FaAngleUp key="up" className="icon-fade" /> : <FaAngleDown key="down" className="icon-fade" />}</span>
                                    {/* <span className={`icon2 ml-2 ${isOpenSideBarNav}`}>{isOpenSideBarNav ? <FaAngleUp /> : <FaAngleDown />}</span>                                 */}
                                </Button>
                                <div className={`sideBarNav ${isOpenSideBarNav === true ? 'open' : ''}`}>
                                    <ul className='catListSided'>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 1</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 2</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 3</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 4</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 5</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 6</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 7</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 8</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 9</Button></Link></li>
                                        <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 10</Button></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-9 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item active'><Link to='/'><Button><FiHome />&nbsp; Home</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><HiOutlineBuildingStorefront />&nbsp; Shop</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 1</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 2</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 3</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><BiCategoryAlt />&nbsp; Category 4</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><RiBloggerLine />&nbsp; Blog</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><FaRegPaperPlane />&nbsp; Contact</Button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;