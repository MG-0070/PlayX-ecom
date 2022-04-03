import React from 'react'
import { ProdCard } from '../../Components/ProdCard/ProdCard';
import "./Products.css";

const Products = () => {
  return (
    <div>
    <main class="product-container flex">
    <aside class="aside-container pt-l ">
    </aside>
    <div class="center-container flex mt-l ml-m mb-l mr-m">
      <ProdCard />
      </div>
      </main>
    </div>
  )
}

export {Products} 