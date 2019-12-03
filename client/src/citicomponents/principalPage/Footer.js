import React from 'react'
import sign from '../../img/dollar.svg';
import phone from '../../img/phone.svg';
import laptop from '../../img/laptop.svg';
import mobile from '../../img/mobile.svg';
import check from '../../img/check.svg';
import globe from '../../img/globe.svg';


const Footer = () => {
  return (
    <div className='footer-container'>
      <h1 className='weare'>Estamos donde tú estás</h1>
      <img src={sign} alt='sign' className='icon'/>
      <img src={phone} alt='phone' className='icon'/>
      <img src={laptop} alt='laptop' className='icon'/>
      <img src={mobile} alt='mobile' className='icon'/>
      <img src={check} alt='check' className='icon'/>
      <img src={globe} alt='globe' className='icon'/>
    </div>
  )
}

export default Footer;
