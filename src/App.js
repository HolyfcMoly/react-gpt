import React, { useState, useEffect } from "react";
import {
    Footer,
    Blog,
    Possibility,
    WhatGPT3,
    Features,
    Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
    const [padding, setPadding] = useState(false);

    const switchPadding = () => {
        const media = window.matchMedia("(max-width: 1050px)");
        media.matches ? setPadding(true) : setPadding(false);
    };

    useEffect(() => {
        switchPadding();
        window.addEventListener("resize", switchPadding);
    }, []);

    return (
        <div className="App">
            <div className="wrapper" >
                <div className="gradient__bg">
                    <Navbar />
                    <Header padding={padding} />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility padding={padding} />
                <CTA />
                <Blog />
                <Footer padding={padding} />
            </div>
        </div>
    );
}

export default App;
