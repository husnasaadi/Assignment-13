import React from 'react'
import { productData } from '../Data'
import { useParams } from 'react-router-dom'

const Product = () => {
    const {id}= useParams();
    console.log(id)
    
    const filterData = productData.filter((e,i)=>{
        return e.id==id
    });
    console.log(filterData)
  return (
    <div>
      <h1>Product pg</h1>

      {filterData.map((e,i)=>{
        return(
            <div>
                <img src={e.image} alt="" />
                <h1>{e.description}</h1>
            </div>

        );
      })}
    </div>
  )
}

export default Product
