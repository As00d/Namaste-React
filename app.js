import React from "react";
import ReactDOM from "react-dom/client";
// Mostly in react it is a nested so how do one create for eg lets say
//
//  <div id="parent">
//      <div id="child">
//          <h1> hello anki</h1>
//          <h2> hello bni</h2>
//      </div>
//      <div id="child">
//          <h1> hello anki</h1>
//          <h2> hello bni</h2>
//      </div>;
//  </div>
// React Element(Object) => HTML element(Browser understands)

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "hello from anki"),
//     React.createElement("h2", {}, "hello from bni"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "hello from ANKI"),
//     React.createElement("h2", {}, "hello from BNI"),
//   ]),
// ]);

const newWithNoChildren = React.createElement(
  "div",
  { id: "parent" },
  "Hello world"
);

// JSX
// const heading = React.createElement("h1", { id: "heading" }, "hello anki");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newWithNoChildren);
