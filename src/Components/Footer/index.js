import { LiaShippingFastSolid } from "react-icons/lia";
import { PiRankingFill } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";

const Footer = () => {
    return(
        <>
            <footer>
                <div className="container">
                    <div className="topInfo row pt-3 pb-3">
                        <div className="topInfoItem cursor-pointer col d-flex align-items-center justify-content-center">
                            <LiaShippingFastSolid />
                            <span>Fast Shipping</span>
                        </div>
                        <div className="topInfoItem cursor-pointer col d-flex align-items-center justify-content-center">
                            <PiRankingFill />
                            <span>Best Quality</span>
                        </div>
                        <div className="topInfoItem cursor-pointer col d-flex align-items-center justify-content-center">
                            <AiOutlineSafety />
                            <span>Safe Payments</span>
                        </div>
                    </div>
                    <div className="row mt-4">
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;