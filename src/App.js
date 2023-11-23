import React from "react";
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
    return (
        <div className="App">
            <div className="wrapper">
                <div className="gradient__bg">
                    <Navbar />
                    <Header />
                    {/* <Article /> */}
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
        </div>
    );
}

export default App;
