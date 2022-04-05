import React from 'react'

export const ProdutFilterRed=(state,action) =>{
    switch(action.type){
        case "sortBy":
        return {...state,sortBy: action.payload}
        default: 
        return state
    }
    
}