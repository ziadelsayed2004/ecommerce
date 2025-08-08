import React from "react";
import Button from "@mui/material/Button";
import Sidebar from "../../Components/Sidebar";

import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";



const Listing = () =>{
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
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

                        <div className="rightContent">
                            <Button className="toggleSidebarBtn d-md-none" onClick={() => setSidebarOpen(true)}>
                                <span className='icon'><IoIosMenu/></span>
                                <span className='text'>Filter</span>
                            </Button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;