// import Link from 'next/link'
// import React from 'react'
// import{ urlFor} from '../lib/client';

// const HeroBanner =({heroBanner})=> {
//   return (
//     <div className='hero-banner-container'>
//       <div>
//         <p className='beats-solo'>{heroBanner.smallText}</p>
//         <h3>{heroBanner.midText}</h3>
//         <h1>{heroBanner.largerText1}</h1>
//         <img src={urlFor(heroBanner.image)} alt="headphonimag" className='hero-banner-image'/>

//             <div>
//               <Link href= {`/product/${heroBanner.product}`}>
//                 <button type='button'>{heroBanner.buttonText}</button>

//               </Link>

//               <div className='desc'>
//                 <h5>Description</h5>
//                 <p>{heroBanner.desc}</p>
//               </div>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default HeroBanner






import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Best seller of the Year</p>
        <h3>{heroBanner.midText}</h3>
        <h1>Music</h1>
        <h1>Energy</h1>
        <h1>Joy</h1>
        
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            {/* <h5>Description</h5> */}
            <h2>{heroBanner.desc}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner