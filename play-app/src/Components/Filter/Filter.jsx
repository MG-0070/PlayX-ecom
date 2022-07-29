import React from "react";
import { useProudctFilter } from "../../Context/FilterCont";
import "./Filter.css";

const Filter = () => {
  const { filterState, filterdispatch } = useProudctFilter();
  return (
    <div className="asideContaner">
      <ul className="aside-filter pl-m flex flex-row">
        <h3 className="font-l f-m">Filters</h3>
        <div
          className="aside-clear f-m font-l mr-s"
          onClick={() => filterdispatch({ type: "clearAll" })}
        >
          Clear
        </div>
      </ul>
      <div className="pl-m pt-m mt-m">
        <h2 className="font-l flex f-m mb-s">price</h2>
        <div className="aside-productPrice pt-s flex">
          <span>रु300</span>
          <span>रु4500</span>
          <span>रु9000</span>
        </div>
        <input
          type="range"
          min="300"
          max="9000"
          onChange={(e) =>
            filterdispatch({ type: "slider", payload: e.target.value })
          }
          value={filterState.newPrice}
          className="aside-slider mt-s"
        />
      </div>
      <div className="mt-m pl-m  ">
        <h3 className=" pb-m flex f-m font-l">Category</h3>
        <div className="flex flex-column">
          <div className="checkboxes">
          <label htmlFor="Game" className="input-checkbox ">
            <input
              type="checkbox"
              id="Game"
              className="mr-s"
              checked={filterState.Game}
              onChange={(e) => filterdispatch({ type: "Game" })}
            />
            Game</label>
          </div>
          <div className="pt-s checkboxes">
          <label htmlFor="Accessories" className="input-checkbox">
            <input
             id="Accessories"
              type="checkbox"
              className="mr-s"
              checked={filterState.Accessories}
              onChange={(e) => filterdispatch({ type: "accessories" })}
            />
             Accessories</label>
          </div>
          <div className="pt-s checkboxes">
          <label htmlFor="VR" className="input-checkbox"> 
            <input
              type="checkbox"
              id="VR"
              className="mr-s"
              checked={filterState.VR}
              onChange={(e) => filterdispatch({ type: "vr" })}
            />
            VR</label>
          </div>
          <div className="pt-s checkboxes">
          <label htmlFor="Console" className="input-checkbox" >
            <input
              type="checkbox"
              id="Console"
              className="mr-s"
              checked={filterState.Console}
              onChange={(e) => filterdispatch({ type: "console" })}
            />
             Console</label>
          </div>
        </div>
      </div>
      <div className="mt-m pl-m ">
        <h3 className="f-m font-l pb-m flex">Rating</h3>
        <div className="flex flex-column">
          <div className="checkboxes">
          <label htmlFor="4" className="input-checkbox"> 
            <input
              type="radio"
              id="4"
              value="4"
              onChange={(e) =>
                filterdispatch({ type: "rating", payload: e.target.value })
              }
              checked={filterState.rating === "4"}
              className="input-star mr-s"
            />
            4 ⭐ & above</label>
          </div>
          <div className="checkboxes pt-s">
          <label htmlFor="3" className="input-checkbox">
            <input
              type="radio"
              value="3"
              id="3"
              onChange={(e) =>
                filterdispatch({ type: "rating", payload: e.target.value })
              }
              checked={filterState.rating === "3"}
              className="input-star mr-s"
            />
             3 ⭐ & above</label>
          </div>
          <div className="checkboxes pt-s">
          <label htmlFor="2" className="input-checkbox">
            <input
              type="radio"
              value="2"
              id="2"
              onChange={(e) =>
                filterdispatch({ type: "rating", payload: e.target.value })
              }
              checked={filterState.rating === "2"}
              className="input-star mr-s"
            />
             2 ⭐ & above</label>
          </div>
          <div className="checkboxes pt-s">
          <label htmlFor="1" className="input-checkbox">
            <input
              type="radio"
              id="1"
              value="1"
              onChange={(e) =>
                filterdispatch({ type: "rating", payload: e.target.value })
              }
              checked={filterState.rating === "1"}
              className="input-star mr-s"
            />
             1 ⭐ & above</label>
          </div>
        </div>
      </div>
      <div className="mt-m pl-m ">
        <h3 className="font-l f-m pb-m flex">Sort by</h3>
        <div className="flex">
          <div>
          <label htmlFor="low"className="input-checkbox" >
            <input
              type="radio"
              id="low"
              value="low-to-high"
              className="mr-s"
              onChange={(e) =>
                filterdispatch({ type: "sortBy", payload: e.target.value })
              }
              checked={filterState.sortBy === "low-to-high"}
            />
            Price-Low to High</label>
          </div>
          <div className="pt-s">
          <label htmlFor="High" className="input-checkbox">
            <input
              type="radio"
              id="High"
              className="mr-s"
              value="high-to-low"
              onChange={(e) =>
                filterdispatch({ type: "sortBy", payload: e.target.value })
              }
              checked={filterState.sortBy === "high-to-low"}
            />
             Price-High to Low</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Filter };
