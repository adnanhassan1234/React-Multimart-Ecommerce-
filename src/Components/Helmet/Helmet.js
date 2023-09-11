import React from "react";

const Helmet = (props) => {
  document.title = "Multimart - " + props.title;
  return (
    <>
      <div className="helmet">{props.children}</div>
    </>
  );
};

export default Helmet;
