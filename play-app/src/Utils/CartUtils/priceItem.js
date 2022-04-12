

const priceItem=(list)=>{
    return list.reduce((acc,curr) => acc + curr.qty * curr.newPrice,0);
}

export {priceItem};