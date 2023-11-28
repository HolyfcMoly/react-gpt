import React from "react";
import "./_whatGPT3.scss";
import { Feature } from "../../components";
import { useInView } from "react-intersection-observer";


function WhatGPT3() {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });
    return (
        <div className={`gpt3__whatgpt3 ${inView ? 'slide-top' : ' '} container`} id="whatgpt3" ref={ref}>
            <div className="gpt3__whatgpt3-content">
                <div className={`gpt3__whatgpt3-content_header ${inView ? 'slide-top-text' : ' '}`}>
                    <Feature
                        title="What is GPT-3"
                        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
                    />
                </div>
                <div className="gpt3__whatgpt3-content_posibilities">
                    <h1 className={`gradient__text ${inView ? 'slide-right-text' : ''}`}>
                        The possibilities are beyond your imagination
                    </h1>
                    <a href="!#" className={`${inView ? 'slide-left-text' : ''}`}>Explore The Library</a>
                    <ul className="gpt3__whatgpt3-content_posibilities-list">
                        <li className={`item ${inView ? 'slide-top-text' : ' '}`}>
                            <Feature
                                title="Chatbots"
                                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
                            />
                        </li>
                        <li className={`item ${inView ? 'slide-top-text' : ' '}`}>
                            <Feature
                                title="Knowledgebase"
                                text="At jointure ladyship an insisted so humanity he.
                                Friendly bachelor entrance to on by. As put
                                impossible own apartments"
                            />
                        </li>
                        <li className={`item ${inView ? 'slide-top-text' : ' '}`}>
                            <Feature
                                title="Education"
                                text="At jointure ladyship an insisted so humanity he.
                                Friendly bachelor entrance to on by. As put
                                impossible own apartments"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WhatGPT3;
