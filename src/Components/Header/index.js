import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';

import { MyContext } from '../../App';
import Navigation from './Navigation';
import CountryDropdown from '../CountryDropdown';
import SearchBox from './SearchBox';

import Logo from '../../assets/images/logo.png';
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import NavCategories from '../NavCategories';

const Header = () => {
  const context = useContext(MyContext);
  const [isOpenSideBarNav, setIsOpenSideBarNav] = useState(false);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-sky">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Sale 30% On All Products Now !</p>
          </div>
        </div>

        <header className="header">
          <div className="container">

            <div className="row topHeader align-items-center justify-content-between d-flex d-md-none">
              <div className="logoWrapper col-auto">
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
              </div>
              <div className="part3 col-auto d-flex align-items-center">
                <div className='cartTab d-flex align-items-center mr-2'>
                  <span className='price'>$3.5</span>
                  <div className='position-relative ml-1'>
                    <Button className='circle'><IoBagOutline /></Button>
                    <span className='count d-flex align-items-center justify-content-center'>1</span>
                  </div>
                </div>
                <Button className='circle'><FaRegUser /></Button>
                <div className="hamburgerBtn">
                    <Button className='circle' onClick={() => setIsOpenSideBarNav(!isOpenSideBarNav)}><IoIosMenu /></Button>
                </div>
              </div>
            </div>

            <div className="row d-flex d-md-none bottomHeader align-items-center mt-2">
                <div className="col-auto">
                    <NavCategories />
                </div>
                <div className="cityDropdown col-auto">
                    {context.egyptCities.length !== 0 && <CountryDropdown />}
                </div>
            </div>

            <div className="row headerSearchContainer d-md-none">
                <div className='w-100'>
                    <SearchBox />
                </div>
            </div>

            {isOpenSideBarNav && (
              <div className="row mt-2 d-md-none">
                <Navigation isCollapsed={true} />
              </div>
            )}

            <div className="row d-none d-md-flex">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={'/'}> <img src={Logo} alt='Logo' /> </Link>
              </div>

              <div className='d-flex align-items-center col-sm-10 part2'>
                {context.egyptCities.length !== 0 && <CountryDropdown />}
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

        <div className="d-none d-md-block">
          <Navigation />
        </div>

      </div>
    </>
  )
}

export default Header;
