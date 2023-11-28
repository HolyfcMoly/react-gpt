import React from "react";
import "./features.scss";
import { Feature } from "../../components";
import BlobBlur from "../../components/feature/BlobBlur";
import { useInView } from "react-intersection-observer";

const featureData = [
    {
        title: "Improving end distrusts instantly",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
        title: "Become the tended active",
        text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
        title: "Message or am nothing",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
        title: "Really boy law county",
        text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
];

function Features() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
        <div
            className={`gpt3__features container ${inView ? "slide-top" : ""}`}
            id="features"
            ref={ref}
        >
            <div className="gpt3__features-content">
                <div className="gpt3__features-content_blob-top">
                    <BlobBlur />
                </div>
                <div className="gpt3__features-content_header">
                    <h1
                        className={`gradient__text ${
                            inView ? "slide-right-text" : ""
                        }`}
                    >
                        The Future is Now and You Just Need To Realize It. Step
                        into Future Today & Make it Happen.
                    </h1>
                    <a href="!#">Request Early Access to Get Started</a>
                </div>
                <ul className="gpt3__features-content_list">
                    {featureData.map((item, index) => {
                        return (
                            <li
                                className={`item ${
                                    inView ? "slide-left-text" : ""
                                }`}
                                key={"id:" + index}
                            >
                                <Feature title={item.title} text={item.text} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Features;
