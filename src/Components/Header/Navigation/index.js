import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { RiBloggerLine } from "react-icons/ri";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import NavCategories from '../../NavCategories';

const Navigation = ()=>{
    return (
        <>
            <nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3 navPart1 d-none d-md-block'>
                            <NavCategories />
                        </div>
                        <div className='col-sm-9 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item active'><Link to='/'><Button><FiHome />&nbsp; Home</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><HiOutlineBuildingStorefront />&nbsp; Shop</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><IoBagOutline />&nbsp; Your Cart</Button></Link></li>
                                <li className='list-inline-item'><Link to='/'><Button><FaRegUser />&nbsp; Account</Button></Link></li>
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