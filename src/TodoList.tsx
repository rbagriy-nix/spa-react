import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ListCom from "./ListCom";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
const TodoList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });

    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            value={item}
            type="text"
            placeholder="Add an Items"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listOfItems}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val, index) => {
              return <ListCom key={index} text={val} />;
            })}
          </ol>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/react"
          >
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
