import React from "react";
export const Wrapper = ({ children }) => {
  return (
    <div>
      <p className="main-title">Counter</p>
      <div className="container">{children}</div>
    </div>
  );
};
