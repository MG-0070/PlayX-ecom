import {useState,useEffect} from "react";
import axios from 'axios';

function useAxios(apiPassed){
    const [apiData,setApiData] = useState({});
    const [loader,setLoader] =useState(true)

    useEffect(() =>{
     (async () => {
       try{
          const response = await axios.get(apiPassed)
          setApiData(response.data)
       }
       catch(err){
          console.log(err ,"data not loaded from server")
       }
       finally{
         setLoader(false)
       }
     })();
       
    },[])
    return {apiData,loader}
}

export default useAxios;