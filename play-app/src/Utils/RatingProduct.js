
export const RatingProduct = (data,rating) =>{
    if(rating){
   return [...data.filter((item) => item.rating >= rating)];
    }
    return data;
}