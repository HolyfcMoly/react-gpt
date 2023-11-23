import React from 'react'
import './brand.scss';
import atlassian from '../../assets/img/atlassian.png';
import goggle from '../../assets/img/google.png';
import dropbox from '../../assets/img/dropbox.png';
import shopify from '../../assets/img/shopify.png';
import slack from '../../assets/img/slack.png';

function Brand() {
  return (
    <div className='gpt3__brands container'>
      <ul className="gpt3__brands-list">
        <li className="gpt3__brands-list_item">
          <img src={goggle} alt="google" />
        </li>
        <li className="gpt3__brands-list_item">
          <img src={slack} alt="slack" />
        </li>
        <li className="gpt3__brands-list_item">
          <img src={atlassian} alt="atlassian" />
        </li>
        <li className="gpt3__brands-list_item">
          <img src={dropbox} alt="dropbox" />
        </li>
        <li className="gpt3__brands-list_item">
          <img src={shopify} alt="shopify" />
        </li>
      </ul>
    </div>
  )
}

export default Brand
