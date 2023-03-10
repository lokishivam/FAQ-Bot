import { useState } from "react";
import FaqBox from "./FaqBox";
import "./Faq.css";
import "./FaqButton.css";
import { data } from "../../data";

export default function Faq(props) {
  const [box, setBox] = useState(false);
  const [minimize, setMinimize] = useState(false);

  function setMin() {
    setMinimize(true);
  }

  function enableBox() {
    setBox(true);
    setMinimize(false);
  }

  function disableBox() {
    setBox(false);
    props.invert();
  }

  return box ? (
    <>
      <div className={minimize ? "noneDisplay" : "box"}>
        <FaqBox
          disableBox={disableBox}
          setMin={setMin}
          arr={props.arr}
        ></FaqBox>
      </div>

      {minimize && (
        <div className="btnPos">
          <button
            className="button-9"
            role="button"
            onClick={() => enableBox()}
          >
            FAQ
          </button>
        </div>
      )}
    </>
  ) : (
    <div className="btnPos">
      <button className="button-9" role="button" onClick={() => enableBox()}>
        FAQ
      </button>
    </div>
  );
}
