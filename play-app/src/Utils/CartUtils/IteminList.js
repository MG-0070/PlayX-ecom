
const IteminList = (id,list)=>{
return list.some((item) => item._id === id)
}

export {IteminList}