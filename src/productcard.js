
import HookContext from "./newContext.js"
import {useContext, useEffect, useState} from "react"

function ProductCard() {
  const products = useContext(HookContext);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [imageUrl, setImageUrl] = useState('');
  
  
function handleClick(e){
  setImageUrl('')
  if(selectedItem !== Number(e.target.id)) {
    setSelectedItem(Number(e.target.id))}  
  else{
    setSelectedItem(-1)
  } 
}

useEffect(async () => {
  async function fetchImage(){
  if(selectedItem !== -1) {
    let url = `http://52.26.193.201:3000/products/${products[selectedItem].id}/styles`
    
    console.log(url)
    await fetch(url)
      .then(res=>res.json())
      .then(json=>{
      if(json.results[0].photos[0].thumbnail_url===null) {
        setImageUrl('')     //image displayed if no thumbnail found
      } else {
        setImageUrl(json.results[0].photos[0].thumbnail_url)
      }
    })
  } else {
    setImageUrl('')}
 }
 fetchImage()}, [selectedItem]);


  const conditionalHTML = (index) => {
    return ( index === selectedItem) ?
      <div>
        <p id={index}> {products[index].description} </p>
        <img id={index} src={imageUrl}></img>
      </div>
      :
      <></>
  }
  
  let elementArray = products.map((item, index) => {
    console.log(index)
    return(
      <div className = "card" id={index}>
        <button id={index} onClick = {handleClick}>
        {products[index].name}
        </button>
        <table>
      <tbody>
        <tr>
          {conditionalHTML(Number(index))}
        </tr>
      </tbody>
    </table>
      </div>
    )
  })
  return elementArray
}
    




    // return (
    //   <div className = "card" id={index}>
    //     <button onClick = {handleClick}>
    //     {product.name}
    //     </button>
    //     <table>
    //   <tbody>
    //     <tr>
    //       {product.description}
    //     </tr>
    //     <tr>
    //       {/* <img src={`${prodInfo.results[0].photos[0].url}`} alt="Camo Onesie"></img> */}
    //     </tr>
    //   </tbody>
    // </table>
    //   </div>
    // );
  
  
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






//  function conditionalHTML(index){
//    return(index===selectedItem?(
//    <div>
     
//    </div>)

//    )
//  }