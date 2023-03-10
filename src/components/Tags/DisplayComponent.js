import { data, map } from "../../data";
import "./DisplayComponent.css";

export default function DisplsyComponent(props) {
  function CheckIsTag() {
    return props.dataObj.onlyQue ? (
      <div className="clientAsks sb1 boxMessage">{props.dataObj.que}</div>
    ) : props.dataObj.isCard ? (
      <Card dataObj={props.dataObj} refresh={props.refresh} />
    ) : (
      <div className="weAnswer sb2 boxMessage">{props.dataObj.ans}</div>
    );
  }

  return <CheckIsTag />;
}

function Card(props) {
  const dataObj = props.dataObj;
  const card = (
    <div className="card">
      <div className="message">
        <ul>
          {dataObj.message.map((msg) => {
            return <li>{msg}</li>;
          })}
        </ul>
      </div>
      <div className="renderSubTags">
        {dataObj.tags.map((subTagObj) => {
          return <SubTag subTagObj={subTagObj} refresh={props.refresh} />;
        })}
      </div>
    </div>
  );

  return card;
}

function SubTag(props) {
  let id = props.subTagObj.id;
  //Application of closures, id property will be preserved for every getObjectFromId method.
  function getObjectFromId() {
    let idx = map.get(id);
    let obj = data[idx];
    props.refresh(obj); //please pass a new object.
  }

  return (
    <div className="tag-body" onClick={getObjectFromId}>
      {props.subTagObj.tag}
    </div>
  );
}
