import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import Logo from '../../assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';
import SearchBox from './SearchBox';

import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import Navigation from './Navigation';


const Header = ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-sky">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Sale 30% On All Products Now !</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}> <img src={Logo} alt='Logo' /> </Link>
                            </div>
                            
                            <div className='d-flex align-items-center col-sm-10 part2'>
                                <CountryDropdown />
                                <SearchBox />
                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FaRegUser /></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.5</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Navigation />
                
            </div>
        </>
    )
}

export default Header;