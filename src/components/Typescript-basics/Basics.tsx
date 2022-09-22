import React from "react";

// Primitives: number, string, boolean (TYPESCRIPT)

const Basics = () => {
  let age: number;
  age = 12;
  let userName: string = "Marius";
  let isInstructor: boolean;
  isInstructor = false;

  return (
    <div>
      {age}
      {userName}
    </div>
  );
};

export default Basics;
