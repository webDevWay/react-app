import React from "react"

export default function(props) {
  let styles = 'like-icon ';
  //Если лайк есть - покрасить в красный
  if (props.el.marked) {
    styles += ' like-icon-red'
  }
  return <div className="main-content_block">
    <img className="main-content_img"
         src={props.el.download_url}
         alt={'picture ' + props.el.id}/>
    <div className="main-content_img_description">
      <div className="main-content_img_description_author">
        <h5>{props.el.author}</h5>
      </div>
      <div className="main-content_img_description_like">
        <span className={ styles } onClick={props.onLikeClick}>&#9829;</span>
      </div>
    </div>
  </div>
}