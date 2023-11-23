import React from "react";
import "./_whatGPT3.scss";
import { Feature } from "../../components";

function WhatGPT3() {
    return (
        <div className="gpt3__whatgpt3 container" id="whatgpt3">
            <div className="gpt3__whatgpt3-content">
                <div className="gpt3__whatgpt3-content_header">
                    <Feature
                        title="What is GPT-3"
                        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
                    />
                </div>
                <div className="gpt3__whatgpt3-content_posibilities">
                    <h1 className="gradient__text">
                        The possibilities are beyond your imagination
                    </h1>
                    <a href="!#">Explore The Library</a>
                    <ul className="gpt3__whatgpt3-content_posibilities-list">
                        <li className="item">
                            <Feature
                                title="Chatbots"
                                text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
                            />
                        </li>
                        <li className="item">
                            <Feature
                                title="Knowledgebase"
                                text="At jointure ladyship an insisted so humanity he.
                                Friendly bachelor entrance to on by. As put
                                impossible own apartments"
                            />
                        </li>
                        <li className="item">
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
