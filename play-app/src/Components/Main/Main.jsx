import React from 'react'
import "./Main.css"
import Games from "../../Assets/Games.png";
import console from "../../Assets/console.png";
import ACCESSORIES from "../../Assets/ACCESSORIES.png";
import VR from "../../Assets/VR.png";
import Assasins from "../../Assets/Assasins.jpg";
import playstation5 from "../../Assets/playstation5.png"
import headset from "../../Assets/headset.jpg";
import oculus from "../../Assets/oculus.jpg";
const Main=()=> {
    return (
    <div> 
    <h2 className="f-m font-xl m-l"style= {{ color: "var(--primary-color)"}} > Category </h2> 
     <div className='category-container flex m-l flex-center '>
        <button className='category-game'>
          <img className='category-img' src={Games} alt="Game" />
            <div className='f-m font-l'>Games</div>
        </button>
        <button className='category-game'>
          <img className='category-img' src={console} alt="Console" />
            <div className='f-m font-l'>Console</div>
        </button>
        <button className='category-game'>
          <img className='category-img' src={ACCESSORIES} alt="Accessoroes" />
            <div className='f-m font-l'>Accessories</div>
        </button>
        <button className='category-game'>
          <img className='category-img' src={VR} alt="VR" />
            <div className='f-m font-l'>Vr</div>
        </button>
    </div>
      <h2 className="f-m font-xl m-l"style= {{ color: "var(--primary-color)"}} > Products </h2> 
        <div className='product-container flex m-l flex-center '>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src={Assasins} alt="Assasins" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l' style={{color: 'var(--secondary-color)'}}>Assasins Creed</div>
                  <div className='flex f-m font-l m-xs' style={{color: 'var(--secondary-color)'}}>रु2000</div>
              </div>
          </a>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src={playstation5} alt="Playstation" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l' style={{color: 'var(--secondary-color)'}}>Playstation</div>
                  <div className='flex f-m font-l m-xs' style={{color: 'var(--secondary-color)'}}>रु20000</div>
              </div>
          </a>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src={headset} alt="headset" className='product-img'/>
              </div>
              <div className='card-body'>
                  <div className='card-sale-info f-s font-l flex flex-center m-xs'>on sale</div>
                  <div className='flex f-m font-l' style={{color: 'var(--secondary-color)'}}>Heasdset</div>
                  <div className='flex f-m font-l m-xs' style={{color: 'var(--secondary-color)'}}>रु6000</div>
              </div>
          </a>
          <a href="" className='product-card'>
              <div className='card-header'>
                  <img src={oculus} alt="VR" className='product-img'/>
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