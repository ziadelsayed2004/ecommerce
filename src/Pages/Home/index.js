import Button from '@mui/material/Button';
import HomeBanner from "../../Components/HomeBanner";
import ProductImg from "../../assets/images/ProductBanner.png";

import { FaArrowRightLong } from "react-icons/fa6";

const Home = () =>{
    return(
        <>
            <HomeBanner />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner">
                                <img src={ProductImg} className="cursor-pointer" alt="ProductBanner" />
                            </div>
                        </div>
                        <div className="col-md-9 ProductRow">
                            <div className="d-flex align-items-center BestProducts">
                                <div className="info w-60">
                                    <h3>Best Seller</h3>
                                    <p>Do not miss the current offers and sales !</p>
                                </div>
                                <Button className='ViewAllBtn ml-auto'>View All<FaArrowRightLong /></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;