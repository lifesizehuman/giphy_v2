import React from "react";

const Row = props =>
  <div className={`row${props.fluid ? "" : ""}`} {...props} />;

export default Row;
