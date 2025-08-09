import React from "react";
import Button from "@mui/material/Button";
import Sidebar from "../../Components/Sidebar";

import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";


const Listing = () =>{
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    React.useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [sidebarOpen]);

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
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;