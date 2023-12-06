import React from 'react';
import style from './header.module.css'

function Header(props){
  return(
    <div className={style.headerDiv}>
    {props.value}</div>

  );
}
export default Header;