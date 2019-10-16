import React from "react";

import ImageBlock from '../ImageBlock/Imageblock';
import Buttons from '../Buttons/Buttons';

export default (props) => {
  const drawImageBlocks = (stateItem) => {
    return stateItem.map((el) =>
      <ImageBlock el={el}
                  key={el.id}
                  onLikeClick={() => props.onLikeClick(el.id)}/>)

  };

  return (
    <main className="App-main">
      { /* Рисуем кнопки */}
      <Buttons props={props}/>

      { /* По умолчанию - компонент с картинками */}
      {!props.param.isLoading && props.param.screenShow === 'pictures' &&
      <div className="main-pictures main-content">
        {drawImageBlocks(props.param.apiData)}
      </div>}

      { /*   При нажатии на кнопку - меняется на избранное */}
      {!props.param.isLoading && props.param.screenShow === "favorites" &&
      <div className="main-favorites main-content">
        {drawImageBlocks(props.param.favorites)}
      </div>}

    </main>
  )
}