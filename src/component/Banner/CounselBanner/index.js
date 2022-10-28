import { FaCheck } from "react-icons/fa";
import FeedBackForm from "../../../component/FeedBackForm";
import "./style.scss";

export default function CounselBanner() {
  return (
    <div className="section CounselBanner">
      <div className="container inBanner">
        <div className="HomeDCont">
          <div className="left">
            <h2>Free Career Counselling</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ullam, eos quam praesentium provident asperiores in natus nesciunt
              quae dolorem!
            </p>
            <ul>
              <li>
                <FaCheck className="icon" /> Free career counselling
              </li>
              <li>
                <FaCheck className="icon" /> Interaction with the faculty
              </li>
              <li>
                <FaCheck className="icon" /> Demo sessions
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="inRight">
              <FeedBackForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
