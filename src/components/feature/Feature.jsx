import React from 'react'
import './feature.scss';

function Feature({title, text}) {
  return (
    <div className='gpt3__feature-container'>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Feature
