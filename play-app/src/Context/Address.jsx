import { createContext, useContext, useState} from "react";
import { v4 as uuid } from "uuid";


const AddressContext = createContext();

const AddressProvider = ({children}) => {
   const [address,setAddress] = useState([{
    _id: uuid(),
    name: "Aniket Singh",
    city: "Banglore",
    addState: "Karnataka",
    country: "India",
    pincode: "803001",
    phone: "484843",
    checked: true
   }])
   return(
    <AddressContext.Provider value={{address,setAddress}}>
        {children}
    </AddressContext.Provider>
   )
}

const useAddress = () => useContext(AddressContext);

export {AddressProvider,useAddress}