import React from "react";

export default function ImageCounter(props) {
  return (
    <div className="image-counter">
      <div className="count">{props.count}</div>
      <img src={props.imageURL} onClick={props.onCount} alt=""/>
    </div>
  );
}
