import React from "react";
import "./blog.scss";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

function Blog() {
    return (
        <div className="gpt3__blog container">
            <div className="gpt3__blog-header">
                <h1 className="gradient__text">
                    A lot is happening, <br />We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_left">
                    <Article
                        img={blog01}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
                    />
                </div>
                <div className="gpt3__blog-container_right">
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
