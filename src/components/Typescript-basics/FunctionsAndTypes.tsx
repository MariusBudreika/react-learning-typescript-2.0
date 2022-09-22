import React from "react";

const FunctionsAndTypes = () => {
  function add(a: number, b: number) {
    return a + b;
  }

  function printOutput(value: any) {
    console.log(value); // function is void because it returns nothing
  }

  return <div></div>;
};

export default FunctionsAndTypes;
