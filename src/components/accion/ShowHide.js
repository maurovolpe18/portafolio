import React, { useState } from "react";
import { Navbar } from "../NavBar/Navbar";

export const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <Navbar />}

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        click
      </button>
    </div>
  );
};
