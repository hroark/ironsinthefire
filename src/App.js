import H from "./Header.js";
import V from "./Videos";
let logo = require("./Images/Me.png");

function Display() {
  return (
    <>
      <div>
        <H />
      </div>
        <p className="center .sticky + .content" style={{ color: "white" }}>
          Welcome to my website. I have never really done any
          <br />
          front-end programming before, and this is site that serves a dual
          purpose:
          <br />
          first, to give me an interesting enveronment for learning
          <br />
          Web-Programming and to give a kind of portfolio describing my
          <br />
          professional life. I wanted to learn ReactJS (No particular reason) so
          <br />
          thats the front-end library I am using. I imagine I will write things
          <br />
          We'll see.
          <br />
        </p>

        <div align="center">
        
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className="center .sticky + .content" style={{ color: "white" }}>
          <br />
            <img src={logo} Alt="Logo" />
          </p>
          

         
          <p className="center .sticky + .content" style={{ color: "white" }}>
            My name is Patrick and I am a senior software developer. I live in Green Bay Wisconsin and and am married with one child. <br/>
             Here is a list of topics I know well, or I need a little work on   
            <br />
            <div class="row">
              <div class="column">
                <p>
                  <u>Fluent</u>
                </p>
                <ul class="no-bullets">
                  <li> HTML5 </li>
                  <li>C# for Applications and MVC projects</li>
                  <li>WinBatch</li>
                  <li>SQL, TSQL</li>
                  <li>Transforms and XML</li>
                  <li>Razor pages</li>
                </ul>
              </div>
              <div class="column no-bullets">
 
                <ul class="no-bullets">
                <u>Researching</u>
                  <li> (x86) Assembler) </li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>REST</li>
                </ul>
              </div>
            </div>
          <br />
            
            The languages I am researching now are just the ones I've needed for the companies that I work with,<br />
            or have used in the past.
            <p
              className="center .sticky + .content"
              style={{ color: "white" }}>
           
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>
              Here are some programming related YouTube videos I made.<br></br>{" "}
              I think since all 3 of them were finished on Christmas Day, I
              should get some kind of 'Golden Geek' award...
            </p>
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <V />
          </p>
          <div class="container_row">
            <div><a href="home">top</a></div>
          </div>
        </div>

        <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div class="container_row a center">
            <strong><a href="Patrick R Porter Resume.doc" download="Patrick R Porter Resume.doc">Patrick Porter Resume</a></strong>
            </div>
    </>
  );
}
export default Display;
