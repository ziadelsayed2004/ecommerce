import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Sidebar from "../../Components/Sidebar";
import ProductItem from "../../Components/ProductItem";

import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { TbGrid3X3 } from "react-icons/tb";
import { TbGrid4X4 } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6"

const Listing = () =>{
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    React.useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [sidebarOpen]);
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [productView, setProductView] = React.useState('four');
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <section className="productListingPage">
                <div className="container">
                    <div className="productList d-flex">

                        <div className={`sidebarWrapper ${sidebarOpen ? "open" : ""}`}>
                            <Button className='close_ circle' onClick={() => setSidebarOpen(false)}><IoClose /></Button>
                            <Sidebar />
                        </div>
                        {sidebarOpen && (<div className="overlay" onClick={() => setSidebarOpen(false)}></div> )}

                        <div className="rightContent pl-0 pr-0">
                            <div className="ContentContainer d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center justify-content-between w-100">
                                    <h5 className="ListTitle mb-4">Check Our Products</h5>
                                    <Button className="toggleSidebarBtn d-md-none mb-4" onClick={() => setSidebarOpen(true)}>
                                        <span className='icon'><IoIosMenu/></span>
                                        <span className='text'>Filter</span>
                                    </Button>
                                </div>    
                                <div className="showBy d-flex w-100 p-2">
                                    <div className="showByBtns d-flex">
                                        <Button onClick={()=> setProductView('one')} className='icon'><IoIosMenu/></Button>
                                        <Button onClick={()=> setProductView('two')} className='icon'><BsGrid/></Button>
                                        <Button onClick={()=> setProductView('three')} className='icon'><TbGrid3X3/></Button>
                                        <Button onClick={()=> setProductView('four')} className='icon'><TbGrid4X4/></Button>
                                    </div>
                                    <div className="ml-auto d-flex showByFiltring">
                                        <Button onClick={handleClick}>Show<span className="ml-1">10</span> <FaAngleDown className="ml-2" /></Button>
                                        <Menu className="mt-1 showPerPageDropDown" id="basic-menu" anchorEl={anchorEl} open={openDropDown} onClose={handleClose} slotProps={{list: {'aria-labelledby': 'basic-button',},}} >
                                            <MenuItem onClick={handleClose}>10</MenuItem>
                                            <MenuItem onClick={handleClose}>20</MenuItem>
                                            <MenuItem onClick={handleClose}>30</MenuItem>
                                            <MenuItem onClick={handleClose}>40</MenuItem>
                                            <MenuItem onClick={handleClose}>50</MenuItem>
                                        </Menu>
                                    </div>
                                </div>

                            </div>
                            <div className="listProduct d-flex">
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;