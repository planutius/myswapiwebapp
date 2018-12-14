import React from 'react'

const Menu = ({ loadMenu, clickMenu }) => {

  return (
    <div>
      {
        Object.entries(loadMenu).map(([key, value]) => {
            return (<button className=" f6 grow br-pill ph3 pv2 mb2 mt2 mh1 dib black button-opt" 
            key={key} onClick={clickMenu(value)}> { key } </button>);
        })
      }
    </div>
  );
}

export default Menu;