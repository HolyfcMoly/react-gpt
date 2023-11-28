import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/img/logo.svg";
import "./navbar.scss";

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleAnimation = () => {
        if (!animate) {
            setToggle(false);
        }
    };

    const ListItems = () => {
        return (
            <>
                <li className="list__item">
                    <a href="#home" className="list__item-links">
                        Home
                    </a>
                </li>
                <li className="list__item">
                    <a href="#whatgpt3" className="list__item-links">
                        What is GPT?
                    </a>
                </li>
                <li className="list__item">
                    <a href="!#" className="list__item-links">
                        Open AI
                    </a>
                </li>
                <li className="list__item">
                    <a href="#features" className="list__item-links">
                        Case Studies
                    </a>
                </li>
                <li className="list__item">
                    <a href="!#" className="list__item-links">
                        Library
                    </a>
                </li>
            </>
        );
    };

    return (
        <div className="gpt3__navbar  container">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <a href="#home">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <ul className="gpt3__navbar-links_list">
                    <ListItems />
                </ul>
            </div>
            <div className="gpt3__navbar-sign">
                <a href="!#" className="signIn-link">
                    Sign in
                </a>
                <button className="signUp-btn btn">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu ">
                {toggle ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setAnimate(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => {
                            setAnimate(true);
                            setToggle(true);
                        }}
                    />
                )}
                {toggle && (
                    <div
                        className={`gpt3__navbar-menu-container ${
                            animate ? "slide-left" : "slide-right"
                        }`}
                        onTransitionEnd={handleAnimation}
                        onAnimationEnd={handleAnimation}
                    >
                        <ul className="gpt3__navbar-links_list">
                            <ListItems />
                        </ul>
                        <div className="gpt3__navbar-sign">
                            <a href="!#" className="signIn-link">
                                Sign in
                            </a>
                            <button className="signUp-btn btn">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
