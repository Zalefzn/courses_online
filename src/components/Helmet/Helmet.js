import React from "react";

const Helmet = (props) => {
  document.title = "Edspert.id Course -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
