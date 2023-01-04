import { createContext, useState } from "react"
export const AppContext  = createContext();

export default function AppContextProvider(props) { 

   const [ name, setName ] = useState("Naveen");

   let values = { 
      name, setName
   }
   
   return <>
      <AppContext.Provider value={values} >
            {props.children} 
      </AppContext.Provider>
   </>
}