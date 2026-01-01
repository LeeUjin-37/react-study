import { createContext, useState } from 'react'


const FontContext = createContext({
  state: {fontSize: "" },
  actions: {setFontSize: () => {}}
})

export const FontProvider = ({children}) => {

  const [fontSize, setFontSize] = useState("2rem")
  const value = {
    state :  {fontSize : fontSize},
    actions : {setFontSize : setFontSize}

  }

  return (
   <FontContext.Provider value={value}>
     {children}
   </FontContext.Provider>
  )

}

export default FontContext;