import React from "react";
import "./cta.scss";
import { useInView } from "react-intersection-observer";

function CTA() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div
            className={`gpt3__cta ${inView ? "slide-top" : ""} container`}
            ref={ref}
        >
            <div className="gpt3__cta-content">
                <div
                    className={`gpt3__cta-content_text ${
                        inView ? "slide-right-text" : ""
                    }`}
                >
                    <p>Request Early Access to Get Started</p>
                    <h1>
                        Register today & start exploring the endless
                        possiblities.
                    </h1>
                </div>
                <button
                    className={`gpt3__cta-content_button btn ${
                        inView ? "slide-left-text" : ""
                    }`}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default CTA;
