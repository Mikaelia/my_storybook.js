import React from "react";

export const Button1 = ({ bg, children }) => (
  <button className="button1" style={{ backgroundColor: bg }}>
    {children}
  </button>
);
