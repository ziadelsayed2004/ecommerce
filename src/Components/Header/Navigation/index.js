import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BiCategoryAlt } from "react-icons/bi";
import { RiBloggerLine } from "react-icons/ri";
import { FaRegPaperPlane } from "react-icons/fa";


const Navigation = ()=>{
    return (
        <>
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4 navPart1'>
                            <Button className='allCatTab align-items-center'>
                                <span className='icon1 mr-2'><IoIosMenu/></span>
                                <span className='text'>All Categories</span>
                                <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>
                        </div>

                        <div className='col-sm-8 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item active'><Link to='/'><FiHome />&nbsp; Home</Link></li>
                                <li className='list-inline-item'><Link to='/'><HiOutlineBuildingStorefront />&nbsp; Shop</Link></li>
                                <li className='list-inline-item'><Link to='/'><BiCategoryAlt />&nbsp; Category 1</Link></li>
                                <li className='list-inline-item'><Link to='/'><BiCategoryAlt />&nbsp; Category 2</Link></li>
                                <li className='list-inline-item'><Link to='/'><BiCategoryAlt />&nbsp; Category 3</Link></li>
                                <li className='list-inline-item'><Link to='/'><RiBloggerLine />&nbsp; Blog</Link></li>
                                <li className='list-inline-item'><Link to='/'><FaRegPaperPlane />&nbsp; Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;