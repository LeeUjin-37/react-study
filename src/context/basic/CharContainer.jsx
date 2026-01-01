import React from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
 return (
  <CharContext.Provider value={{color: "blue" , fontSize: "50px"}}>
   <A />
  </CharContext.Provider>
 );
};

export default CharContainer;