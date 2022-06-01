import React from "react";

const Detail = (props) => {
  return (
    <div className={props.display}>
      <p>Detail</p>
      <p>Name: {props.name}</p>
      <p>ID: {props.id}</p>
    </div>
  );
};

export default Detail;
