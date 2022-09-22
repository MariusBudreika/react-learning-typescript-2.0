import React from "react";

// Generics

const Generics = () => {
  function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    console.log(newArray);

    return newArray;
  }

  const demoArray = [1, 2, 3];
  const updatedArray = insertAtBeginning(demoArray, -1);
  const stringArray = insertAtBeginning(["a", "b", "c"], "d");
  console.log(stringArray);

  // updatedArray.split("");

  return <div></div>;
};

export default Generics;
