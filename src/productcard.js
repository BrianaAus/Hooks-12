

import HookContext from "./newContext.js"
import {useContext, useEffect, useState} from "react"

function ProductCard({ product }) {
 
  const [prodInfo, setProdInfo] = useState([])

  const productInfo = async (productID) => {
    const url = `http://52.26.193.201:3000/products/${productID}/styles`; 
    const response = await fetch(url);
    const data = await response.json()
    //console.log(data.results[0].photos)
    return (
      setProdInfo(data)
    );
  } 


  useEffect((e) => {productInfo(e)}, [])

    
    return (
      <div className = "card">
        <button onClick = {(e) => productInfo(product.id)}>
        {product.name}
        </button>
        <table>
      <tbody>
        <tr>
          {product.description}
        </tr>
        <tr>
          {/* <img src={`${prodInfo.results[0].photos[0].url}`} alt="Camo Onesie"></img> */}
        </tr>
      </tbody>
    </table>
      </div>
    );
  }
  
  export default ProductCard;


/*
<div class="card">
  <img src="jeans3.jpg" alt="Denim Jeans" style="width:100%">
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
*/

