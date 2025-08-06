import Sidebar from "../../Components/Sidebar";

const Listing = () =>{
    return(
        <>
            <section className="productListingPage">
                <div className="container">
                    <div className="productList d-flex">
                        <Sidebar />

                        <div className="rightContent">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;