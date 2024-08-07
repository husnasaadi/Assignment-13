import React from 'react'
import { productData } from '../Data'
import Cards from '../Cards/Cards'
import './Home.css'
const Home = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
      {productData.map((e,i)=>{
        return(
            <div>
                <Cards
                id={e.id}
                title={e.title}
               desc={e.description}
                image={e.image}
                key={i}
                />
            </div>

        )
      })}
    </div>
  )
}

export default Home
