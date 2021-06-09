import ProductCard from "./productcard.js"
import HookContext from "./newContext"
import {useContext, useEffect, useState} from "react"

function ProductBox() {
  const products = useContext(HookContext);
  return (
    <div>
      {products.map((product, index) => (
          <ProductCard product={product} key={product.name} />
      ))}
    </div>



  );
}

export default ProductBox;



/* <button onClick = {(e) => getProduct(product.id)} > {product.name}</button> 

<button onClick = {(e) => getProduct(product.id)} > 


   async function getProduct(productID){
    const url = `http://52.26.193.201:3000/products/${productID}`; 
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }   


*/ 

