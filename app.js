import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello Anki");
// JSX is not html in javascript, it has a html like syntax

// JSX -> Transpiled before it reaches to js engine by bundler ( parcel in this case ) -> uses babel

// JSX => React.createElement => React Element JS object => HTML render()
const jsx = (
  <h1 id="heading" className="heading">
    Hello anki
  </h1>
);

// React component
// functional component

const Title = () => {
  <h1>hello i am title</h1>;
};

// Component composition
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1>Hello i am react functional component </h1>
    </div>
  );
};

const HeadingComponent2 = () => <h1>Hello i am react functional component </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

console.log(heading);
console.log(jsx);
