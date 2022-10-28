import { RiArrowRightCircleLine } from "react-icons/ri";
import { BsFillCameraVideoFill } from "react-icons/bs";
import {
  FaRegCalendarAlt,
  FaRegNewspaper,
  FaCalculator,
  FaRegUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.scss";

export default function HomeB() {
  const HomeB = [
    {
      img: "https://iili.io/bJ1m6Q.md.png",
      title: "Personalized Learning",
      paraG:
        "Third set them, their also midst herb two all. Abundantly seasons days, greater set light had and isn't were land. Be light they're..",
    },
    {
      img: "https://iili.io/bJGE1R.md.png",
      title: "Personalized Learning",
      paraG:
        "Third set them, their also midst herb two all. Abundantly seasons days, greater set light had and isn't were land. Be light they're..",
    },
  ];
  const HomeB2 = [
    {
      img: "https://iili.io/bJGVdN.md.png",
      title: "Personalized Learning",
      paraG:
        "Third set them, their also midst herb two all. Abundantly seasons days, greater set light had and isn't were land. Be light they're..",
    },
    {
      img: "https://iili.io/bJMFEv.md.png",
      title: "Personalized Learning",
      paraG:
        "Third set them, their also midst herb two all. Abundantly seasons days, greater set light had and isn't were land. Be light they're..",
    },
  ];
  return (
    <div className="section HomeB">
      <div className="container inHomeB">
        <div className="title">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable.
          </p>
        </div>
        <div className="uNNYm">
          <div className="left">
            {HomeB.map((item, i) => {
              return (
                <div className="box" key={i}>
                  <img src={item.img} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.paraG}</p>
                </div>
              );
            })}
          </div>
          <div className="center">
            {HomeB2.map((item, i) => {
              return (
                <div className="box" key={i}>
                  <img src={item.img} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.paraG}</p>
                </div>
              );
            })}
          </div>
          <div className="right">
            <div className="box">
              <h2>
                LOR <span style={{ color: "#B4FF57" }}>2029</span> <br /> Lorem
                Course{" "}
              </h2>
              <div className="rBoxImg">
                <img
                  src="https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://aceipm.com/wp-content/uploads/2020/12/IIMIndore1200.jpg"
                  alt=""
                />
              </div>
              <div className="rBoxPrice">
                <h6>
                  <span>$82,000</span> $60,997
                </h6>
              </div>
              <div className="learnMoreBtn">
                <Link className="siteBtn" to="/course">
                  <RiArrowRightCircleLine icon /> Click to learn more
                </Link>
              </div>
              <div className="rBottom">
                <h6>Lorem ipsum dolor sit:</h6>
                <ul>
                  <li>
                    <BsFillCameraVideoFill />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li>
                    <FaRegCalendarAlt />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li>
                    <FaRegNewspaper />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li>
                    <FaCalculator />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                  <li>
                    <FaRegUserCircle />
                    <span>Lorem ipsum dolor sit.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
