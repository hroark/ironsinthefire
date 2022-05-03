import {useState} from 'react'
import { send } from 'emailjs-com';
import H from "./Header.js";
import V from "./Videos";
import B from "./Contact"
import React from "react";
import "./index.css";
let logo = require("./Images/Me.png");

function Display() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  return (
    <>
      <>


        <div>
          <H />
        </div>
        <p className="center .sticky + .content" style={{ color: "white" }}>
          Welcome to my website. I have done very little
          <br />
          front-end programming before, and this is a site that serves a dual
          purpose:
          <br />
          first, to give me an interesting environment for learning
          <br />
          Web-Programming and to give a kind of portfolio describing my
          <br />
          professional life. I wanted to learn ReactJS (No particular reason) so
          <br />
          thats the front-end library I am using. I imagine I will write things
          using other frameworks.
        </p>

        <div align="center">
          <br />
          <br />
          <br />
          <h2><a href="mailto:patrick@ironsinthefire.dev">Email Me</a></h2>
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
        <br />
        <br />

        <div class="container_row a center ResBox">
          <strong>
            <a
              href="Patrick R Porter Resume.doc"
              download="Patrick R Porter Resume.doc"
            >
              Patrick Porter Resume
            </a>
          </strong>
        </div>
        <br />
        <br />
        <br />

        <B />
</>
</>
  );
}
export default Display;
