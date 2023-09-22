import React, { useState } from 'react'
import './Products.css'
import StarRate from './StarRate/StarRate'
export default function Products(props) {
    const {selectCrd,addProduct,setAddProduct,selectProduct,priceFormat,setPriceFormat,sortPrice,searchInput}=props
  const sortByvalue=['low-to-high','high-to-low']
  return (
    <React.Fragment>
   <div className='products'>
<div className='productsHeader'>Products</div>
   <div>Sortby <select onChange={(e)=>{sortPrice(e.target.value)}}  disabled={searchInput.length>0}><option value="regular">Regular</option>{sortByvalue.map((option,index) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}</select></div>
   </div>
   <div style={{display:"flex",justifyContent:"space-between",flexDirection:"column",gap:'1rem'}}>{!selectCrd ?<div>noProducts</div>:selectCrd.map(({title,category,thumbnail,price,rating,stock,description,brand,discountPercentage,id},index)=><div className='productsMain'>
   <div style={{display:"flex",flexDirection:"column",justifyContent:'space-between'}}>
    <div><div>{title}</div>
   <div>{brand}</div>
   <div>{category}</div>
   <div><StarRate stars={rating}/></div>
   {/* <div>{rating}</div> */}
   <div>Price:{price}</div>
   <div>Discount:{discountPercentage}%</div></div>
   <div><button onClick={()=>{selectProduct(index)}}>+ADD</button></div>
   </div>
   <div style={{width:'13rem',height:"13rem"}}><img src={thumbnail}/></div>
    </div>)}</div>
    </React.Fragment>
 
  )
}
