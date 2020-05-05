import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
let greetings = "";
const time = date.getHours();
const customStyle = {
  color: ""
};
if (time >= 0 && time <= 11) {
  customStyle.color = "red";
  greetings = "Good Morning";
} else if (time >= 12 && time <= 17) {
  customStyle.color = "green";
  greetings = "Good Afternoon";
} else if (time >= 18 && time <= 23) {
  customStyle.color = "blue";
  greetings = "Good Evening";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {" "}
      Hello {greetings}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
