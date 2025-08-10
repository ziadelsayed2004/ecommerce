import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Sidebar from "../../Components/Sidebar";
import ProductItem from "../../Components/ProductItem";

import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
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
                                <div className="d-flex align-items-center justify-content-between mb-2 w-100">
                                    <h5 className="ListTitle">Check Our Products</h5>
                                    <Button className="toggleSidebarBtn d-md-none" onClick={() => setSidebarOpen(true)}>
                                        <span className='icon'><IoIosMenu/></span>
                                        <span className='text'>Filter</span>
                                    </Button>
                                </div>    
                                <div className="showBy d-flex w-100 p-2">
                                    <div className="showByBtns d-flex">
                                        <Button className='icon'><IoIosMenu/></Button>
                                        <Button className='icon'><HiViewGrid/></Button>
                                        <Button className='icon'><CgMenuGridO/></Button>
                                    </div>
                                    <div className="ml-auto d-flex showByFiltring">
                                        {/* <Button className="mr-2"></Button> */}
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
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;