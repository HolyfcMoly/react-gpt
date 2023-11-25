import React from "react";
import "./cta.scss";

function CTA() {
    return (
        <div className="gpt3__cta container">
            <div className="gpt3__cta-content">
                <div className="gpt3__cta-content_text">
                    <p>Request Early Access to Get Started</p>
                    <h1>
                        Register today & start exploring the endless
                        possiblities.
                    </h1>
                </div>
                <button className="gpt3__cta-content_button btn">Get Started</button>
            </div>
        </div>
    );
}

export default CTA;
