import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [des, setdes] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);
  const changeToDes = () => {
    setdes((prev) => {
      return !prev;
    });
    setchangesort((prev) => {
      return !prev;
    });
  };
  const [changesort, setchangesort] = useState(true);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} asc={des} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeToDes}>
        {changesort ? "Change To Des" : "change To Asc"}
      </Button>
    </div>
  );
}

export default App;
