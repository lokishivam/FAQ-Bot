import { getTitleData } from "../../data";
import "./Header.css";
export default function Header(props) {
  const BotImage = "bot.png";
  const message = getTitleData();
  return (
    <div className="block">
      <div className="parent">
        <button
          className="closebtn"
          role="button"
          onClick={() => props.setMin()}
        >
          -
        </button>

        <button
          className="closebtn"
          role="button"
          onClick={() => props.disableBox()}
        >
          X
        </button>
      </div>

      <div className="title">
        <div>
          <img src={BotImage} height="40px" width="50px" alt="bot"></img>
        </div>
        <h3>{message}</h3>
      </div>
    </div>
  );
}
