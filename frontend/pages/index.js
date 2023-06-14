import React from 'react'
import { client } from '@/lib/client'
import { Product,FooterBanner,HeroBanner } from '@/components'

const Home = ( { products, bannerData}) => (
 
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {/* {console.log(bannerData)} */}
  <div className='products-heading'>

  <h2>Our Products</h2>
  {/* <p>EXPLORE</p> */}
    </div> 
 
    <div className='products-container'>
      {products?.map(
        (product) => <Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner footerBanner = {bannerData && bannerData[0]}/>


   </div>
)




// export const getServerSideProps = async () => {
//   const query =  `*[ _type== "product" ] `;
//   const products= await client.fetch(query);
//   const bannerQuery= ` *[ _type== "banner" ] `;
//   const bannerData =await client.fetch(bannerQuery);

//     return {
//       props: {products, bannerData}
//     }
//   }
  // export default home;


  
        import {createClient} from "next-sanity" ;
import Products from '@/components/Product';
  

    export async function getServerSideProps(context) {
     const client= createClient ({
      projectId :"755dorsk" ,
      dataset: "production" ,
      useCdn: true

      });
      const query =  `*[ _type== "product" ] `;
      const products= await client.fetch(query);
       const bannerQuery= ` *[ _type== "banner" ] `;
      const bannerData =await client.fetch(bannerQuery);
  
      return {
        props:{products,bannerData} 
      }
    }
  

    export default Home 














// import { client } from '@/lib/client'

// import { Product, FooterBanner, HeroBanner } from "@/components";

// import React from "react";

// const home = () => {
//   return (
//     <>
//       <HeroBanner/>
//       HeroBanner
//       <div className="products-heading">
//         <h2> best selling</h2>
//         <p>speakert of many type</p>
//       </div>
//       <div className="products-container">
//         {["product1", "product2"].map((product) => product)}
//       </div>
//       <FooterBanner />
//     </>
//   );
// };

// export default home;

