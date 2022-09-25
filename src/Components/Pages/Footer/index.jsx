import React from 'react'
// import Facebook from '/img/Facebook.svg'
import Instagram from './img/instagram.svg'
import Pinterest from './img/Pinterest.svg'
import Twitter  from './img/Twitter.svg'

export default function Footer() {
  return (
    <>
{/* <img src={Facebook} alt="Facebook" /> */}
<img src={Instagram} alt="Instagram" />
<img src={Pinterest} alt="Pinterest" />
<img src={Twitter} alt="Twitter" />
<ul>
    <li>about</li>
    <li>recipes</li>
    <li>subscribe</li>
</ul>
 </>
  

  )
}