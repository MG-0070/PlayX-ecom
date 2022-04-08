
export const sliderProduct = (data,newPrice) =>{
  if(newPrice){
      return[...data.filter((item) => item.newPrice < newPrice)]
  }
  return data;
}