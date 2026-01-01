import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './style';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const Styled05 = () => {
 return (
  <div>
   <S.BellIcon icon={faBell} shake />
  </div>
 );
};

export default Styled05;