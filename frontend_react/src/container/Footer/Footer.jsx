import React from 'react'
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  return (
  <>
  <h2 className="head-text">Take a coffee & chat with me</h2>
  <div className='app__footer-cards'>
    <div className="app__footer-card ">
      <img src={images.email} alt="" />
      <a href="mailto:hello@micael.com">hello@micael.com</a>
    </div>
    <div  className="app__footer-card ">
      <img src={images.mobile} alt="" />
      <a href="tel:+1 (123) 456-7890">+1 (123) 456-7890</a>
    </div>
  </div>
  </>
  )
}

export default Footer