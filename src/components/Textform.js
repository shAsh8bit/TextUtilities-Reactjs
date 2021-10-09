import React, { useState } from "react";

export default function Textform(props) {
  let myStyle = {
    backgroundColor: props.mode === "light" ? "white" : "#b1ceeb",
    border: "2px solid #70aeed",
  };
  const [text, change] = useState();

  const handleClick = () => {
    let Uppercase = text.toUpperCase();
    change(Uppercase);
  };
  const handleClick2 = () => {
    let lowercase = text.toLowerCase();
    change(lowercase);
  };
  const handleClick3 = () => {
    let process1 = text.charAt(0).toUpperCase();
    let process2 = text.slice(1).toLowerCase();
    let Capitalize = process1 + process2;
    change(Capitalize);
  };
  function handleClick4() {
    change((document.getElementById("exampleFormControlTextarea1").value = ""));
  }
  function handleClick5() {
    let textarea = document.getElementById("exampleFormControlTextarea1");
    textarea.select();
    document.execCommand("copy");
  }
  const handleOnchange = (event) => {
    change(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h2 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Enter Text
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={myStyle}
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={handleOnchange}
          ></textarea>
          <button
            type="submit"
            className={`btn btn-${
              props.mode === "light" ? "outline-dark" : "outline-light"
            } my-3 ${text === "" ? "disabled" : text}` }
            onClick={handleClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="submit"
            className={`btn btn-${
              props.mode === "light" ? "outline-dark" : "outline-light"
            } mx-2 ${text === "" ? "disabled" : text}`}
            onClick={handleClick2}
          >
            Convert to lowercase
          </button>
          <button
            type="submit"
            className={`btn btn-${
              props.mode === "light" ? "outline-dark" : "outline-light"
            } mx-2 ${text === "" ? "disabled" : text}`}
            onClick={handleClick3}
          >
            Capitalize first letter
          </button>
          <button
            type="submit"
            className={`btn btn-${
              props.mode === "light" ? "outline-dark" : "outline-light"
            } mx-2 ${text === "" ? "disabled" : text}`}
            onClick={handleClick4}
          >
            Clear Text
          </button>
          <button
            type="submit"
            className={`btn btn-${
              props.mode === "light" ? "outline-dark" : "outline-light"
            } mx-2 ${text === "" ? "disabled" : text}`}
            onClick={handleClick5}
          >
            Copy Text
          </button>
          {/* <div>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>
              {text===""?0:text.split(" ").length} words | {text.length} characters
            </p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{0.008 * text.split(" ").length} minutes read </p>
          </div> */}
          <div
            className={`border border-${
              props.mode === "light" ? "dark" : "light"
            } rounded`}
          >
            <h3
              className={`mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              Preview
            </h3>
            <p
              className={`mx-2  text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
