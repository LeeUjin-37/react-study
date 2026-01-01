import React from 'react';
import CharContext from './CharContext';

const C = () => {
 return (
  <CharContext.Consumer>
   {
     (context) => {
       console.log("context", context);
       return <p style={{color: context.color}}>리액트 Context API </p>
     }
   }
  </CharContext.Consumer>
 );
};

export default C;