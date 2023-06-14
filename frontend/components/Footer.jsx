// import React from 'react'

// function Footer() {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer




import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright © 2023 upBEATS - All rights reserved.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer