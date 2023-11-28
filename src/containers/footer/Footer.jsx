import React from "react";
import "./footer.scss";
import logo from "../../assets/img/logo.svg";
import { useInView } from "react-intersection-observer";

function Footer(padding) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div className="gpt3__footer" ref={ref}>
            <div
                className={`gpt3__footer-container container ${
                    padding ? "" : "switch-padding"
                } ${inView ? "slide-top" : ""}`}
            >
                <div className="gpt3__footer-container_heading">
                    <h1 className="gradient__text">
                        Do you want to step in to the future before others
                    </h1>
                    <button
                        className={`gpt3__footer-container_heading-btn btn ${
                            inView ? "slide-top-text" : ""
                        }`}
                    >
                        Request Early Access
                    </button>
                </div>
                <div className="gpt3__footer-container_content">
                    <ul className="gpt3__footer-container_content-menu">
                        <li className="menu-list__item">
                            <div
                                className={`menu-list__item-logo ${
                                    inView ? "slide-right-text" : ""
                                }`}
                            >
                                <a href="!#">
                                    <img src={logo} alt="logo" />
                                </a>
                                <p>
                                    Crechterwoord K12 182 DK Alknjkcb, All
                                    Rights Reserved
                                </p>
                            </div>
                        </li>
                        <li
                            className={`menu-list__item ${
                                inView ? "slide-left-text" : ""
                            }`}
                        >
                            <h2>Links</h2>
                            <div className="menu-list__item-links">
                                <a href="!#">Overons</a>
                                <a href="!#">Social Media</a>
                                <a href="!#">Counters</a>
                                <a href="!#">Contact</a>
                            </div>
                        </li>
                        <li
                            className={`menu-list__item ${
                                inView ? "slide-left-text" : ""
                            }`}
                        >
                            <h2>Company</h2>
                            <div className="menu-list__item-links">
                                <a href="!#">Terms & Conditions</a>
                                <a href="!#">Privacy Policy</a>
                                <a href="!#">Contact</a>
                            </div>
                        </li>
                        <li
                            className={`menu-list__item ${
                                inView ? "slide-left-text" : ""
                            }`}
                        >
                            <h2>Get in touch</h2>
                            <div className="menu-list__item-links">
                                <a href="!#">
                                    Crechterwoord K12 182 DK Alknjkcb
                                </a>
                                <a href="!#">085-132567</a>
                                <a href="!#">info@payme.net</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="gpt3__footer-container_copyrights">
                    <p>© 2021 GPT-3. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
