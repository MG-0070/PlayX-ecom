import React from 'react'
import { Filter } from '../../Components';
import { ProdCard } from '../../Components/ProdCard/ProdCard';
import { useProduct } from '../../Context/ProductCont';
import "./Products.css";

const Products = () => {
const {prodData} = useProduct()
  return (
    <div>
      <div>
        <h3 className='mt-l f-m font-xl' style={{color: 'var(--primary-color)'}}>Showing all Products()</h3>
    <main className="product-container flex">
    <aside className="aside-container pt-l ">
      <Filter />
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
    </div>
  )
}

export {Products} 