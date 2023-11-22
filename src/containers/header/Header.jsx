import React, {useEffect, useState} from "react";
import people from "../../assets/img/Group 81.png";
import ai from "../../assets/img/Illustration.png";
import "./header.scss";


function Header() {
  const [padding, setPadding] = useState(false);
  
  const switchPadding =() => {
    const media = window.matchMedia("(max-width: 1050px)");
    media.matches ? setPadding(true) : setPadding(false);
  }

  useEffect(() => {
    switchPadding();
    window.addEventListener('resize', switchPadding);
  },[])

    return (
        <div className={`gpt3__header container ${padding ? '' : 'right-padding'}`} id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let’s Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div className="gpt3__header-content_input">
                    <input type="email" placeholder="Your email address" />
                    <button type="button" className="btn header__btn">
                        Get Started
                    </button>
                </div>
                <div className="gpt3__header-content_people">
                    <img src={people} alt="people" />
                    <span>
                        1,600 people requested access a visit in last 24 hours
                    </span>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    );
}

export default Header;
