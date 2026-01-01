import { createContext, useState } from 'react'

export const AnimalsContext = createContext({
  state : {aniamls : []},
  actions : {insert: () => {} , remove: () => {}}
})

export const AnimalsProvider = ({children}) => {
  const [animals, setAnimals] = useState(['누렁이','얼룩이','점박이'])
  // 1번 실습
  // 동물을 추가하고 삭제하는 메서드 구현하기 

  const insert = (data) => setAnimals(animal => [...animal,data])
  const remove = (data) => setAnimals(animals => animals.filter(animal => animal !== data))
  
  const value = {
    state : {animals: animals},
    actions : {insert: insert, remove: remove}

  }

  return(
    <AnimalsContext.Provider value={value}>
     {children}
    </AnimalsContext.Provider>

  )
}

export default AnimalsContext;