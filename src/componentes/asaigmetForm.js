import React, { useState } from "react";
import "../App.css";

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submit}>
        <h1>Insert your assignment</h1>
        <input
          placeholder="write your assignment"
          value={inputText}
          onChange={manejarFormulario}
        />
        <button className="ov-btn-grow-ellipse">Save</button>
      </form>
      {!validacion && (
        <div className="validacion">Please update your assignment.</div>
      )}
    </div>
  );
};

export default TareaForm;
