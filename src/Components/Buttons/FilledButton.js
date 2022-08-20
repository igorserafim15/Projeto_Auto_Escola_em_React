import React from "react";

const FilledButton = ({ children }) => {
  return (
    <a className="filled-button" href="#">
      {children}
    </a>
  );
};

export default FilledButton;
