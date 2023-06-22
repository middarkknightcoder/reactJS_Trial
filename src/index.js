import React from "react";
import ReactDOM from "react-dom";

///////////Javascript Expression and ES6 Templets ////////////
// const Fname = "Ronak";
// const Lname = "Kantariya";
// const num = Math.floor(Math.random() * 10);
// // {} into the couse you can write the value of the variable
// ReactDOM.render(
//   <div>
//     <h1>My name is {Fname + " " + Lname}</h1>
//     <h1>
//       {Fname} {Lname}
//     </h1>
//     <h1>{`${Fname} ${Lname}`}</h1>
//     <p>my lucky number is {num}</p>
//   </div>,
//   document.getElementById("root")
// );

//////////// write a two para and in first para name and second para year//////////////////////
// const name = "Ronak";
// const currentDate = new Date();
// const year = currentDate.getFullYear();

// ReactDOM.render(
//   <div>
//     <p>Created by {name}</p>
//     <p>Copywrite {year}</p>
//   </div>,
//   document.getElementById("root")
// );

///////////////// JSx Attributes and styleing React Element ////////////////////
//// Note: Here JSx attributes is diffrent to the html attributes
// const img = "https://picsum.photos/200"; // This is link of the photos website
// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       THIS IS MY FIRST REACT PROJECT
//     </h1>
//     <ul>
//       <img className="react-img" src={img + "?blur"} alt="random images"></img>
//       <img
//         className="react-img"
//         src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
//         alt="react"
//       ></img>
//       <img
//         className="react-img"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwnXaSzQKs9sCHfJQ4EV74jvlZEuA_Nvg4zOFH4qeawQ&usqp=CAU&ec=48600112"
//         alt="JSx"
//       ></img>
//       <img
//         className="react-img"
//         src="https://i.ytimg.com/vi/yLrNwo4wXOs/maxresdefault.jpg"
//         alt="Babel which is Js compiler"
//       ></img>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

///////////////////// In react inline style cutomizable css ////////////////////

// This is a style object for the rect inline css
// const customStyle = {
//   color: "red",
//   border: "2px solid red",
//   background: "black"
// };

// // And also you can change the style using the object of the css
// customStyle.color = "green";

// ReactDOM.render(
//   <h1 style={customStyle}>This is a react</h1>, // Here you can not add the simple way to css into the react
//   document.getElementById("root")
// );

/////////////// Here if goodMorning - midNight to 12PM(red) goodAfternoon 12PM to 6PM(green) goodNight 6PM to midnight (blue) ///////////////////////

// const customStyle = {
//   color: ""
// };

// let greeting = "";

// const date = new Date();

// const currentTime = date.getHours();

// console.log(currentTime);

// if (currentTime < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if (currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "orange";
// } else {
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }

// ReactDOM.render(
//   <h1 className="heading" style={customStyle}>
//     {greeting}
//   </h1>,
//   document.getElementById("root")
// );

///////////////// Here learn about React component //////////////////
// In the XML (JSx) you can creat your own component using the function
// Advantages of the component is you can used component any time into the JS file

// import App from "./Components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

////////////////// Here how you can ued the defalt and multiple value using the import and export //////////////////

// import PI, { doublePi, triplePi } from "./Components/math"; // Here import defalut and more then one function into the JSx
import * as PI from "./Components/math"; //This is used for the import the all into the JSx file as a object

ReactDOM.render(
  <div>
    <ul>
      <li>{PI.default}</li>
      <li>{PI.doublePi()}</li>
      <li>{PI.triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
