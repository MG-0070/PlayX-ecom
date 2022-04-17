import React from 'react'
import "./Main.css"
import {Link} from "react-router-dom";

const Main=()=> {
    return (
    <div> 
    <h2 className="f-m font-xl m-l categ-name" > Category </h2> 
     <div className='category-container flex m-l flex-center '>
         <Link to='/products'>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406686/Images/download_yrebfk.png' alt="Game" />
            <div className='f-m font-l'>Games</div>
        </button>
        </Link>
        <Link to='/products'>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406768/Images/console_ewmjgf.png' alt="Console" />
            <div className='f-m font-l'>Console</div>
        </button>
        </Link>
        <Link to='/products'>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406839/Images/1024px-Headphone_icon.svg_k4r5ko.png' alt="Accessoroes" />
            <div className='f-m font-l'>Accessories</div>
        </button>
        </Link>
        <Link to='/products'>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406893/Images/download_1_xjexl4.png' alt="VR" />
            <div className='f-m font-l'>Vr</div>
        </button>
        </Link>
    </div>
      <h2 className="f-m font-xl m-l prod-name"> Products </h2> 
        <div className='product-container flex m-l flex-center '>
          <Link to="/products"  className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649011352/Images/apps.52808.69748098540497451.a03a4b64-603b-49b8-8644-4924ac7f3076_co0mlx.jpg' alt="Assasins" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l card-style-name' >Assasins Creed</div>
                  <div className='flex f-m font-l m-xs card-style-price' >रु2000</div>
              </div>
          </Link>
          <Link to='/products'  className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649016035/Images/playstation-5-horizontal-product-shot-01-ps5-en-23nov20_x9ovud.png' alt="Playstation" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l card-style-name'>Playstation</div>
                  <div className='flex f-m font-l m-xs card-style-price' >रु40000</div>
              </div>
          </Link>
          <Link to="/products"  className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649015585/Images/headset-collection-homepage-image-block-01-en-13oct21_tv5quo.jpg' alt="headset" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l card-style-name' >Heasdset</div>
                  <div className='flex f-m font-l m-xs card-style-price' >रु6000</div>
              </div>
          </Link>
          <Link to="/products"  className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649016013/Images/oculus_301_00351_02_quest_2_advanced_all_in_one_1657091_kazntb.jpg' alt="VR" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l card-style-name' >Oculus Vr</div>
                  <div className='flex f-m font-l m-xs card-style-price' >रु26000</div>
              </div>
          </Link>
        </div>
 </div>)
}

export {Main}