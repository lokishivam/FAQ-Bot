import { useState } from "react";
import "./App.css";
import Faq from "./components/Faq/Faq";
import { data } from "./data";

function App() {
  const [refreshApp, setApp] = useState(false);
  function invert() {
    setApp(!refreshApp);
  }
  const arr = [data[0]];
  return (
    <div>
      <Faq arr={arr} invert={invert} />
    </div>
  );
}

export default App;

/*
next version
1.trasitions to chats, 
2.onHover effects to tags 
3.header should be in line.
4.change the color (in the end according to the webiste color)

comment the entire code for documentation.
*/
