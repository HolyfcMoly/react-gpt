import React, { useEffect } from "react";
import "./possibility.scss";
import possibility from "../../assets/img/possibility.png";

function Possibility({ padding, switchPadding }) {
    useEffect(() => {
        switchPadding();
        window.addEventListener("resize", switchPadding);
    }, []);

    return (
        <div
            className={`gpt3__possibility ${
                padding ? "" : "switch__padding"
            } container`}
        >
            <div className="gpt3__possibility-image">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <a href="!#">Request Early Access to Get Started</a>
                <h1 className="gradient__text">
                    The possibilities are beyond your imagination
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <a href="!#">Request Early Access to Get Started</a>
            </div>
        </div>
    );
}

export default Possibility;
