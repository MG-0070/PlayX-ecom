export const SortedProduct = (data,sortByPrice)=>{
    if(sortByPrice === "low-to-high"){
        return [...data].sort((item1,item2) => item1.newPrice - item2.newPrice)
    }
    if(sortByPrice === "high-to-low")
    {
       return [...data].sort((item1,item2) => item2.newPrice - item1.newPrice)
    }
    return data
}