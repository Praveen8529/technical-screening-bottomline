import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Item from "./components/item";
import Header from "./components/header";

import "./styles.css";
import Archived from "./components/archived";

const transactionsData = [
  { name: "Mortgage", amount: "-$1123" },
  { name: "New Macbook M1 Air", amount: "-$1500" },
  { name: "Audi Car Payments", amount: "-$500" },
  { name: "Salary", amount: "+$4000" }
];

function App() {
  const [count, setCount] = useState(0);

  const [dataObj, setDataObj] = useState(transactionsData);

  const [archived, setArchive] = useState([]);

  // const count = (value) => setCount(value);

  useEffect(() => {
    console.log("HELLO");
  }, []);

  const data = { key: "Welcome to Bottomline!" };

  const onDelete = (e) => {
    const updatedObj = dataObj.filter((x) => x.name !== e.target.id);
    setDataObj(updatedObj);
    let updatedArchive = dataObj.filter((x) => x.name === e.target.id);
    setArchive((prev) => [...prev, ...updatedArchive]);
  };
  console.log(archived);
  return (
    <div className="App">
      <Header />
      <h2>You clicked {count} times!</h2>
      <hr />
      <br />
      <h2>Transactions</h2>
      <div>
        <ul>
          {dataObj.map((item, i) => {
            return (
              <li>
                <span>{item.name}</span>
                <span>{item.amount}</span>
                <button id={item.name} onClick={onDelete}>
                  DLETE
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <br />
      <Archived archived={archived} />
      <br />
      <hr />
      <br />
      <Item prop={data} />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
