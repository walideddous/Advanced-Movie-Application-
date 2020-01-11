import React from "react";

const Like = ({onClick,liked}) => {

  const classes = () => {
    let classname = "fa fa-heart";
    return (classname += liked ? "" : "-o");
  };

  return (
    <i
      className={classes()}
      style={{ cursor: "pointer" }}
      onClick={onClick}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
