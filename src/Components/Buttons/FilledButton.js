import React from "react";

const FilledButton = ({ text, href }) => {
  return (
    <a className="c-filled-button" href={href}>{text}</a>
  );
};

export default FilledButton;
