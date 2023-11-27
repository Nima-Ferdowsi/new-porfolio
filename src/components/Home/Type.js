import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend developer",
          "backend developer",
          "Mobile App developer",          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay:4
      }}
    />
  );
}

export default Type;
