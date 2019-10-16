import React from "react";
import Button from "../NavButton/Navbutton";

export default (props) => {
  return (
    <nav className="nav">
      {props.props.param.buttons.map((el, i) =>
        <Button dataName={el.dataName}
                title={el.title}
                key={el.id}
                isActive={props.props.param.buttons[i].isActive}
                changeShowScreen={props.props.changeShowScreen}/>)
      }
    </nav>
  )
}