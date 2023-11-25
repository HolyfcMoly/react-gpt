import React from 'react'
import './article.scss';


function Article({img, date, title}) {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-img'>
        <img src={img} alt="" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div className='gpt3__blog-container_article-content_text'>
          <p>{date}</p>
          <h1>{title}</h1>
        </div>
        <a href="!#">Read Full Article</a>
      </div>
    </div>
  )
}

export default Article

