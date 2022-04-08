import React from 'react'
import "./Main.css"

const Main=()=> {
    return (
    <div> 
    <h2 className="f-m font-xl m-l"style= {{ color: "var(--primary-color)"}} > Category </h2> 
     <div className='category-container flex m-l flex-center '>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406686/Images/download_yrebfk.png' alt="Game" />
            <div className='f-m font-l'>Games</div>
        </button>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406768/Images/console_ewmjgf.png' alt="Console" />
            <div className='f-m font-l'>Console</div>
        </button>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406839/Images/1024px-Headphone_icon.svg_k4r5ko.png' alt="Accessoroes" />
            <div className='f-m font-l'>Accessories</div>
        </button>
        <button className='category-game'>
          <img className='category-img' src='https://res.cloudinary.com/aniket-singh/image/upload/v1649406893/Images/download_1_xjexl4.png' alt="VR" />
            <div className='f-m font-l'>Vr</div>
        </button>
    </div>
      <h2 className="f-m font-xl m-l"style= {{ color: "var(--primary-color)"}} > Products </h2> 
        <div className='product-container flex m-l flex-center '>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649011352/Images/apps.52808.69748098540497451.a03a4b64-603b-49b8-8644-4924ac7f3076_co0mlx.jpg' alt="Assasins" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l' style={{color: 'var(--secondary-color)'}}>Assasins Creed</div>
                  <div className='flex f-m font-l m-xs' style={{color: 'var(--secondary-color)'}}>रु2000</div>
              </div>
          </a>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649016035/Images/playstation-5-horizontal-product-shot-01-ps5-en-23nov20_x9ovud.png' alt="Playstation" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l' style={{color: 'var(--secondary-color)'}}>Playstation</div>
                  <div className='flex f-m font-l m-xs' style={{color: 'var(--secondary-color)'}}>रु40000</div>
              </div>
          </a>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649015585/Images/headset-collection-homepage-image-block-01-en-13oct21_tv5quo.jpg' alt="headset" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l' style={{color: 'var(--secondary-color)'}}>Heasdset</div>
                  <div className='flex f-m font-l m-xs' style={{color: 'var(--secondary-color)'}}>रु6000</div>
              </div>
          </a>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src='https://res.cloudinary.com/aniket-singh/image/upload/v1649016013/Images/oculus_301_00351_02_quest_2_advanced_all_in_one_1657091_kazntb.jpg' alt="VR" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l' style={{color: 'var(--secondary-color)'}}>Oculus Vr</div>
                  <div className='flex f-m font-l m-xs' style={{color: 'var(--secondary-color)'}}>रु26000</div>
              </div>
          </a>
        </div>
 </div>)
}

export {Main}