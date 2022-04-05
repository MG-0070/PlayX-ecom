import React from 'react'
import { useProudctFilter } from '../../Context/FilterCont'
import "./Filter.css"


const Filter = () => {
    const {filterState,filterdispatch} = useProudctFilter();
  return (
    <div>
          <ul className="aside-filter pl-m flex flex-row">
                <h3 className="font-l f-m">Filters</h3>
                <div className="aside-clear f-m font-l mr-s">Clear</div>
            </ul>
            <div className="pl-m pt-m mt-m">
                <h2 className="font-l flex f-m mb-s">price</h2>
                <div className="aside-productPrice pt-s flex"><span>रु300</span><span>रु4500</span><span>रु9000</span>
                </div>
                <input type="range" min="300" max="1000" value="" className="aside-slider mt-s" />
            </div>
            <div className="mt-m pl-m  " >
                <h3 className=" pb-m flex f-m font-l">Category</h3>
                <div className='flex flex-column'>
                <div className='checkboxes'>
                    <input type="checkbox" checked="" />
                   <label htmlFor="Games"> Games</label>
                </div>
                <div className="pt-s checkboxes">
                    <input type="checkbox" checked="" />
                 <label htmlFor="Accessories"> Accessories</label>     
                </div>
                <div className="pt-s checkboxes">
                    <input type="checkbox" checked="" />
                 <label htmlFor="VR"> VR</label>     
                </div>
                <div className="pt-s checkboxes">
                    <input type="checkbox" checked="" />
                 <label htmlFor="Console"> Console</label>     
                </div>
             </div>
         </div>
         <div className="mt-m pl-m ">
                <h3 className="f-m font-l pb-m flex">Rating</h3>
               <div className='flex flex-column'>
                <div className='checkboxes'>
                    <input type="radio" checked="" />
                    <label> 4 ⭐ & above</label>
                </div >
                <div className="checkboxes pt-s">
                    <input type="radio" />
                    <label> 3 ⭐ & above</label>
                </div>
                <div className="checkboxes pt-s">
                    <input type="radio" />
                    <label> 2 ⭐ & above</label>
                </div>
                <div className="checkboxes pt-s">
                    <input type="radio"/>
                    <label> 1 ⭐ & above</label>
                </div>
             </div>
            </div>
            <div className="mt-m pl-m ">
                <h3 className="font-l f-m pb-m flex">Sort by</h3>
                <div className='flex'>
                <div>
                    <input type="radio" id='low'
                    value='low-to-high'
                     onChange={(e) => filterdispatch({type: "sortBy",payload: e.target.value})} 
                    checked={filterState.sortBy === "low-to-high" }   />
                    <label htmlFor='low'> Price-Low to High</label>
                </div>
                <div className="pt-s">
                    <input type="radio"  id="High"
                    value='high-to-low'
                     onChange={(e) => filterdispatch({type: "sortBy",payload: e.target.value})} 
                     checked= {filterState.sortBy === "high-to-low"}  />
                    <label htmlFor='High'>  Price-High to Low</label>
                </div>
                </div>
            </div> 
    </div>
  )
}

export {Filter} 
