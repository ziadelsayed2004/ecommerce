import { useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { TiInfoLargeOutline } from "react-icons/ti";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SidebarNavigation = ({ isOpen, onClose }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className={`sidebar-nav ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className='sidebar-navContainer' onClick={(e) => e.stopPropagation()}>
        <Button className='close_ circle' onClick={onClose}><IoClose /></Button>
        <ul className='list list-inline ml-auto'>
          <li className='list-inline-item mr-0 active'><Link to='/'><Button><FiHome />&nbsp; Home</Button></Link></li>
          <li className='list-inline-item mr-0'><Link to='/'><Button><HiOutlineBuildingStorefront />&nbsp; Shop</Button></Link></li>
          <li className='list-inline-item mr-0'><Link to='/'><Button><IoBagOutline />&nbsp; Your Cart</Button></Link></li>
          <li className='list-inline-item mr-0'><Link to='/'><Button><FaRegUser />&nbsp; Account</Button></Link></li>
          <li className='list-inline-item mr-0'><Link to='/'><Button><TiInfoLargeOutline />&nbsp; About</Button></Link></li>
          <li className='list-inline-item mr-0'><Link to='/'><Button><FaRegPaperPlane />&nbsp; Contact</Button></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarNavigation;