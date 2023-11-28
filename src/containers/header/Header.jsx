import React from "react";
import people from "../../assets/img/Group 81.png";
import ai from "../../assets/img/Illustration.png";
import "./header.scss";
import BlobBlur from "../../components/feature/BlobBlur";

function Header({padding}) {

    return (
        <div
            className={`gpt3__header container ${
                padding ? "" : "right-padding"
            }`}
            id="home"
        >
            <div className="gpt3__header-blob_top">
                <BlobBlur />
            </div>
            <div className="gpt3__header-blob_bottom">
                <BlobBlur />
            </div>
            <div className="gpt3__header-content">
                <h1 className="gradient__text slide-top-text">
                    Let’s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p className="slide-top-text">
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div className="gpt3__header-content_input slide-top-text">
                    <input type="email" placeholder="Your email address" />
                    <button type="button" className="btn header__btn">
                        Get Started
                    </button>
                </div>
                <div className="gpt3__header-content_people slide-right-text">
                    <img src={people} alt="people" />
                    <span>
                        1,600 people requested access a visit in last 24 hours
                    </span>
                </div>
            </div>
            <div className="gpt3__header-image slide-left-text">
                <img src={ai} alt="ai" />
            </div>
            
        </div>
    );
}

export default Header;
