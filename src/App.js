
import H from "./Header.js";
import V from "./Videos";
import B from "./Contact"
import React from "react";
import "./index.css";
let logo = require("./Images/Me.png");
let sw = require("./Images/pioneersoftwash.png");

function Display() {
/*  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }*/
  return (
    <>
      <>


        <div>
          <H />
        </div>
        <p className="center .sticky + .content" style={{ color: "white" }}>
          Welcome to my website. I have done very little
          <br />
          front-end programming before, and this is a site that serves As a platform where I can learn and practice.
          <br></br>
          I wanted to learn ReactJS (No particular reason) so
          <br />
          thats the front-end library I am using. I imagine I will write things
          using other frameworks in the future.
        </p>

        <div align="center">
          <br />
          <br />
          <br />
                    <br />
          <p className="center .sticky + .content" style={{ color: "white" }}>
            <br />
            <img src={logo} Alt="Logo" />
          </p>
          <p className="center .sticky + .content" style={{ color: "white" }}>
            My name is Patrick and I am a software developer who lives in Green
            Bay, Wisconsin and and am married with one child.
            <br />
            Below is a list of tools that I normally work with.
            <br />
            <div class="row">
              <div class="column">
                <ul class="no-bullets">
                  <li>C# for Applications and MVC projects</li>
                  <li> HTML5 </li>
                  <li>Razor pages</li>
                  <li>SSIS</li>
                  <li>SSRS</li>
                  <li>SQL, TSQL</li>
                  <li>XSLT and XML</li>
                  <li>VB.Net</li>
                  <li>WinBatch</li>
                </ul>
              </div>
              <div class="column no-bullets"></div>
            </div>
            <br />
            <p className="center .sticky + .content" style={{ color: "white" }}>
              <br />
              <p>
                Here are some programming related YouTube videos I've made, and
                hope you find interesting.<br></br>
                You may want to maximize them for better viewing.
              </p>
            </p>
            <br />
            <br />
            <V />
          </p>
          <div class="container_row">
            <div>
              <a href="home">top</a>
            </div>
          </div>
        </div>


        <br />
        <br />
        <br />

        {/* <div class="container_row a center ResBox">
          <strong>
            <a
              href="Patrick R Porter Resume.doc"
              download="Patrick R Porter Resume.doc"
            >
              Patrick Porter Resume
            </a>
          </strong>
          </div> */}
          <div>
            <br />
            <h1 className="FormLabels center"> Drop a line!</h1>
          
            <br />
          <B />
        </div>
        <br />
        <br />
        <br />
        <p className="center .sticky + .content" style={{ color: "white" }}>
            <br />
            <img src={sw} Alt="Logo" />
          </p>

</>
</>
  );
}
export default Display;
