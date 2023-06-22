import React from "react";

function Greeting() {
  const customStyle = {
    color: ""
  };

  let greeting = "";

  const date = new Date();

  const currentTime = date.getHours();

  console.log(currentTime);

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "orange";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Greeting;
