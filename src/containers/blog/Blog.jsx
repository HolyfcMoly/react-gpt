import React from "react";
import "./blog.scss";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { useInView } from "react-intersection-observer";

function Blog() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div
            className={`gpt3__blog container ${inView ? "slide-top" : ""}`}
            ref={ref}
        >
            <div className="gpt3__blog-header">
                <h1 className="gradient__text">
                    A lot is happening, <br />
                    We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div
                    className={`gpt3__blog-container_left ${
                        inView ? "slide-right-text" : ""
                    }`}
                >
                    <Article
                        img={blog01}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
                <div
                    className={`gpt3__blog-container_right ${
                        inView ? "slide-left-text" : ""
                    }`}
                >
                    <Article
                        img={blog02}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        img={blog03}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        img={blog04}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                    <Article
                        img={blog05}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
            </div>
        </div>
    );
}

export default Blog;
