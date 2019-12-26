import React from 'react';


function Header(props) {
  return  <div className="header">
  <h1>Todo list</h1>
    <span>All : {props.all}</span><br />
    <span>Completed : {props.done}</span>
 </div>
}

export default Header