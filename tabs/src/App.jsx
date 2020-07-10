import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GroupButton from "./components/Tabs";

function App() {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(true);
  const [tab3, setTab3] = useState(true);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const switchTextbox = (e) => {
    // let temp = (e.target.hidden) ? false : true
    // alert (`${e.target.innerHTML}, Hidden: ${e.target.hidden}, Switch to: ${temp} `)
    if (e.target.innerHTML === "Tab1") {
      setTab1(false);
      setTab2(true);
      setTab3(true);
    } else if (e.target.innerHTML === "Tab2") {
      setTab1(true);
      setTab2(false);
      setTab3(true);
    } else if (e.target.innerHTML === "Tab3") {
      setTab1(true);
      setTab2(true);
      setTab3(false);
    }
  };
  const arr = [
    { status: tab1, show: setTab1, details: text1, change: setText1 },
    { status: tab2, show: setTab2, details: text2, change: setText2 },
    { status: tab3, show: setTab3, details: text3, change: setText3 },
  ];
  return (
    <div className="App">
      <GroupButton list={arr} handleButton={switchTextbox} />
    </div>
  );
}

export default App;
