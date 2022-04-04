import React from 'react'
import { ProdCard } from '../../Components/ProdCard/ProdCard';
import { useProduct } from '../../Context/ProductCont';
import "./Products.css";

const Products = () => {
const {prodData} = useProduct()
  return (
    <div>
    <main className="product-container flex">
    <aside className="aside-container pt-l ">
    </aside>
    <div className="center-container flex mt-l ml-m mb-l mr-m">
      {prodData.map(cardData => (
       <>
      <ProdCard prod={cardData} key={cardData._id}/>
      </>
      )
       )}
      </div>
      </main>
    </div>
  )
}

export {Products} 