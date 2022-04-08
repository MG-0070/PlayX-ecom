export const CategoryList = (data,{Game,Accessories,VR,Console}) =>{
    let categoryFilter = [];
    if(Game === true){
        categoryFilter = [
            ...categoryFilter,
            ...data.filter((item) => item.categoryName=== 'Game')
        ]
    }
  if(Accessories === true){
      categoryFilter = [
          ...categoryFilter,
          ...data.filter((item) => item.categoryName === "Accessories")
      ]
  }
  if(VR === true){
      categoryFilter =[
          ...categoryFilter,
          ...data.filter((item) => item.categoryName === "VR")
      ]
  }
  if(Console === true){
      categoryFilter=[
          ...categoryFilter,
          ...data.filter((item) => item.categoryName === "Console")
      ]
  }
  if(categoryFilter.length === 0){
      return data;
  }
  return categoryFilter;
}