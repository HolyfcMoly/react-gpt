import React, {useState} from "react";
import {
    Footer,
    Blog,
    Possibility,
    WhatGPT3,
    Features,
    Header,
} from "./containers";
import { Article, CTA, Brand, Navbar } from "./components";

function App() {
    const [padding, setPadding] = useState(false);

    const switchPadding = () => {
        const media = window.matchMedia("(max-width: 1050px)");
        media.matches ? setPadding(true) : setPadding(false);
    };
    return (
        <div className="App">
            <div className="wrapper">
                <div className="gradient__bg">
                    <Navbar />
                    <Header padding={padding} switchPadding={switchPadding} />
                    {/* <Article /> */}
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility padding={padding} switchPadding={switchPadding} />
                <CTA />
                <Blog />
                <Footer padding={padding} switchPadding={switchPadding} />
            </div>
        </div>
    );
}

export default App;
