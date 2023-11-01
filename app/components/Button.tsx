// include this component in js bundle, also all components depend on it will be included bundle as well.
// for faster app and more search friendly, render most components on the server
// use this if absolutely necessary
"use client";

const Button = () => {
  return (
    <div>
      <button onClick={() => console.log("Hello World")}>Check Console</button>
    </div>
  );
};

export default Button;
