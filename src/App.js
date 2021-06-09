import React, {useState, useEffect} from "react";
import HookContext from "./newContext"
import ProductCard from "./productcard"
import './App.css'

async function getProduct(productID){
  const url = "'http://52.26.193.201:3000/products/'+'productID'"; 
  const response = await fetch(url); 
  return response;
}



function App () {

const [product, setProduct] = useState([])

const products = async () => {
  const url = "http://52.26.193.201:3000/products/list";
  const response = await fetch(url); 
  const data = await response.json()
  
  return setProduct(data);
}

useEffect(() => {products()}, [])
  

  // const products = await getProductsList()
  // setState({ products: [state.products]})
  // const specificProduct = getProduct(1)
  // const {products} = state;
  
  return (
    <HookContext.Provider value ={product}>
    <div>
      <h1>Products</h1>
        <ProductCard />
    </div>

    </HookContext.Provider>
  );
}


export default App;
