

const totalItem=(item)=>{
  return item.reduce((acc,curr) => acc + curr.qty,0)
}


export {totalItem}