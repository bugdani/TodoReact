import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { ReactComponent as Send } from "../../assets/send.svg";
import { isEmpty } from "lodash";
import firebase from "../../utils/firebase";
import "firebase/firestore";
import "./AddTasks.scss";

const db = firebase.firestore(firebase);

export default function AddTasks(props) {
  const { setReloadTask } = props;
  const [task, setTask] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(task)) {
      db.collection("todo")
        .add({
          name: task,
          completed: false,
        })
        .then(() => {
          setTask("");
          setReloadTask(true);
        });
    }
  };
  return (
    <Form onSubmit={onSubmit} className="add-tasks">
      <input
        type="text"
        placeholder="Nueva tarea"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <Button type="submit">
        <Send />
      </Button>
    </Form>
  );
}
