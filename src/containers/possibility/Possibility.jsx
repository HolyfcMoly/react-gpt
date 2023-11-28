import React from "react";
import "./possibility.scss";
import possibility from "../../assets/img/possibility.webp";
import { useInView } from "react-intersection-observer";

function Possibility(padding) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });
    return (
        <div
            className={`gpt3__possibility ${padding ? "" : "switch__padding"} ${
                inView ? "slide-top" : ""
            } container`}
            ref={ref}
        >
            <div
                className={`gpt3__possibility-image ${
                    inView ? "slide-right-text" : ""
                }`}
            >
                {inView ? <img src={possibility} alt="possibility"/> : '' }
            </div>
            <div className="gpt3__possibility-content">
                <div
                    className={`gpt3__possibility-content_link ${
                        inView ? "slide-bottom-text" : ""
                    }`}
                >
                    <a href="!#">Request Early Access to Get Started</a>
                </div>
                <h1
                    className={`gradient__text ${
                        inView ? "slide-bottom-text" : ""
                    }`}
                >
                    The possibilities are beyond your imagination
                </h1>
                <p className={`${inView ? "slide-bottom-text" : ""}`}>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div
                    className={`gpt3__possibility-content_link ${
                        inView ? "slide-bottom-text" : ""
                    }`}
                >
                    <a href="!#">Request Early Access to Get Started</a>
                </div>
            </div>
        </div>
    );
}

export default Possibility;
