import React, { useState, useEffect } from "react";
import firebase from "./utils/firebase";
import "firebase/firestore";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { map, size } from "lodash";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Task";
import "./App.scss";

const db = firebase.firestore(firebase);
function App() {
  const [tasks, setTasks] = useState(null);
  const [reloadTask, setReloadTask] = useState(false);

  useEffect(() => {
    db.collection("todo")
      .orderBy("completed")
      .get()
      .then((response) => {
        const arrayTasks = [];
        map(response.docs, (task) => {
          const data = task.data();
          data.id = task.id;
          arrayTasks.push(data);
        });
        setTasks(arrayTasks);
      });
  }, [reloadTask]);
  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Daniel Alejandro Velasquez</h1>
      </div>
      <Row className="todo">
        <Col
          className="todo__title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
        >
          <h2>Mi dia</h2>
        </Col>
        <Col
          className="todo__list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
        >
          {!tasks ? (
            <div className="loading">
              <Spinner animation="border" />
              <span>Cargando</span>
            </div>
          ) : size(tasks) === 0 ? (
            <h3>No hay tareas</h3>
          ) : (
            map(tasks, (task) => (
              <Tasks key={task.id} task={task} setReloadTask={setReloadTask} />
            ))
          )}
          {/*  */}
        </Col>
        <Col
          className="todo__input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
        >
          <AddTasks setReloadTask={setReloadTask} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
