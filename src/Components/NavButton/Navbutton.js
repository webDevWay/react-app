import React from "react";

export default function(props) {
  let styles = 'nav-button ';
  //цвет активной кнопки
  if (props) {
    if (props.isActive) {
      styles += ' active-button'
    }
  }
  console.log(props);
  return <div className={styles}
              data-name={props.dataName}
              onClick={() => props.changeShowScreen({props})} >
    {props.title}
  </div>
}
