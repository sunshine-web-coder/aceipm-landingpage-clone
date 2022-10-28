import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./style.scss";

export default function CourseD() {
  const tryB4Data = [
    {
      img: "https://iili.io/bHEWIs.png",
      urlLabel: "Quantitative Aptitude",
      name: "Kunle Bamidele",
    },
    {
      img: "https://iili.io/bHEWIs.png",
      urlLabel: "Verbal Ability",
      name: "kate Morgan",
    },
    {
      img: "https://iili.io/bHEWIs.png",
      urlLabel: "Logical Reasoning",
      name: "Katerine Balogun",
    },
  ];
  return (
    <div className="section CourseD">
      <div className="title">
        <h2>Try Before You Buy</h2>
      </div>

      <div className="CourseUh7">
        <div className="container inCourseUh7">
          {tryB4Data.map((item, i) => {
            return (
              <div className="inCourseUh7Box" key={i}>
                <div className="iCbImg">
                  <img src={item.img} alt="" />
                </div>
                <h6>
                  <Link to="">{item.urlLabel}</Link>
                </h6>
                <li>
                  <i className="fa-regular fa-circle-user"></i> {item.name}
                </li>
                <div className="starsIcon">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className="container MuijLM">
          <Link className="siteBtn" to="">
            <span>
              <span>Complete Demo Playlist</span> <i class="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
