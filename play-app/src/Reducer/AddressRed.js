  
  
  export const AddressRed = (state,action) => {
    switch(action.type){
        case "SET_NAME":
           return {
            ...state,name: action.payload
           } ;
           case "SET_CITY":
            return {
                ...state,city: action.payload
            }
            case "SET_STATE":
                return {
                    ...state,addState : action.payload
                }
             case "SET_COUNTRY":
                return{
                    ...state,country : action.payload
                }
                case "SET_Pincode":
                    return {
                        ...state,pincode: action.payload
                    };
                    case "SET_PHONENUMBER":
                        return {...state,phone : action.payload};
                        case "SET_DUMMYADDRESS":
                        return {
                            ...state,
                            name: "Jhonny Deep",
                       city: "Los Angles",
                    addState: "Jhonny state",
                    country: "USA",
                   pincode: "5000333",
                     phone: "4498438943",
                        };
            default: 
            return state;
    }

}