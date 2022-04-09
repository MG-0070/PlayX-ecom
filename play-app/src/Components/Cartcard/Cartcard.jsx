import "./Cartcard.css"


const Cartcard = () => {
  return (
    <div>
         <div  className="horizotal-card flex flex-row">
            <div  className="header-one">
                <img  className="card-image-one" src='https://res.cloudinary.com/aniket-singh/image/upload/v1649011352/Images/apps.52808.69748098540497451.a03a4b64-603b-49b8-8644-4924ac7f3076_co0mlx.jpg'  alt="" />
            </div>
            <div  className="body-horzCard  flex flex-colum ">
                <div  className="card-info">
                    <div  className="f-m font-s p-xs">Controller</div>
                    <div  className="f-m font-m p-xs">रु2845<span  className="card-disc pl-s f-s font-l">रु5690</span>
                    </div>
                    <div  className="card-off p-xs f-m font-s">50% OFF</div>
                </div>
                <div  className="cart-quatity mt-xs mb-s ">
                    <span  className="font-l">Quantity :</span>
                    <button  className="cart-btn br-s pr-s font-l">+</button>
                    <input type="text"  className="cart-input" value="1" />
                    <button  className="cart-btn br-s pl-s font-l">-</button>
                </div>
                <div  className="card-click">
                    <button  className="card-cart-btn p-xs f-s font-s">Add to cart</button>
                    <button  className="card-whislist-btn p-xs f-s font-s mt-s">Remove from whislist </button>
                </div>
            </div>
        </div>
        
        </div> 
    
  )
}

export {Cartcard}