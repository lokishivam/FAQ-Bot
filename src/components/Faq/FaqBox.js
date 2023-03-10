import Header from "./Header";
import "./FaqBox.css";
import { useEffect, useState, useRef } from "react";
import { getFaqs } from "../../data";
import DisplayComponent from "../Tags/DisplayComponent";

export default function FaqBox(props) {
  const data = getFaqs();
  const arr = props.arr;
  const [typing, updateTyping] = useState(true); //typing is true only while displaying the chats
  const scrollToRef = useRef(null);

  function refresh(dataObj) {
    //whenever an option is selected this function will run.
    if (!typing) {
      const objForQue = { ...dataObj };
      objForQue.onlyQue = true;
      arr.push(objForQue); //This will only display the question from the object
      dataObj.onlyQue = false;
      arr.push(dataObj); //This will display the complete object.
      updateTyping(true);
    }
  }

  function wait() {
    updateTyping(false);
    setTimeout(() => {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    }, 0);
  }

  useEffect(() => {
    if (typing) {
      scrollToRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
      setTimeout(wait, 2000);
    }
  }, [typing]);

  return (
    <>
      <Header disableBox={props.disableBox} setMin={props.setMin} />

      <div className="content">
        <div className="innerContent">
          {typing ? (
            <>
              {arr.map((dataObj, i) =>
                i < arr.length - 1 ? (
                  <DisplayComponent dataObj={dataObj} refresh={refresh} />
                ) : (
                  <></>
                )
              )}
              <div id="typeImg">
                <img src="7Jgh.gif" height="50px" width="80px" alt="bot"></img>
              </div>
            </>
          ) : (
            <>
              {arr.map((dataObj) => (
                <DisplayComponent dataObj={dataObj} refresh={refresh} />
              ))}
            </>
          )}
          <div ref={scrollToRef}></div>
        </div>
      </div>
    </>
  );
}
