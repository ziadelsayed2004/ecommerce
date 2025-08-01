import { LiaShippingFastSolid } from "react-icons/lia";
import { PiRankingFill } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

import { Link } from "react-router-dom";

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
                    <div className="row copyright d-flex pt-3 mt-3">
                        <ul className="list-inline col-12">
                            <li className="list-inline-item">
                                <Link target="_blank" to="https://github.com/ziadelsayed2004"><FaGithub /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link target="_blank" to="https://linkedin.com/in/ziadelsayedzaki"><FaLinkedin /></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link target="_blank" to="https://wa.me/201020572730"><FaWhatsappSquare /></Link>
                            </li>
                        </ul>
                        <p className="col-12"><Link target="_blank" to="mailto:ziadelsayed2004@gmail.com">Copyright 2025 © Ziad Elsayed <span>-</span> All Right Reserved <span>-</span> Powered By Ziad Elsayed <span>-</span> E-Commerce App Full Stack Using &#123; Node & Express & React &#125;</Link></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;