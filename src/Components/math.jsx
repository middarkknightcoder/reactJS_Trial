import React from "react";

const pi = 3.14;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

// NOTE : In the one module only one defalut value exist
export default pi; // This is used for export the defalt value one JSx file to other JSx file
export { doublePi, triplePi };
