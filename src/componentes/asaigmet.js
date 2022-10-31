import React, { useState } from "react";
import "../App.css";
import { BsFillBackspaceFill } from "react-icons/bs";

const Tarea = (props) => {
  const [modoEdit, setModoEdit] = useState(false);

  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  const borrarTarea = () => {
    props.borrar(props.id);
  };
  return (
    <div className="eachtarea">
      {!modoEdit ? (
        <div className="tarea">
          <span>{props.tarea}</span>
          <button className="edit" onClick={editar}>
            Edit
          </button>
          <button lassName="borrar" onClick={borrarTarea}>
            <BsFillBackspaceFill />
          </button>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input
            className="input"
            placeholder="Update your assignment "
            value={editText}
            onChange={manejarEdit}
          />
          <button className="guardar">Save</button>
        </form>
      )}
    </div>
  );
};

export default Tarea;
