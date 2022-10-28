import { Link } from "react-router-dom";
import { BiCalendarCheck } from "react-icons/bi";
import Slider from "react-slick";
import { TrustedTestimonyData } from "../../../component/allDatas";
import "./style.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

export default function HomeC() {
  return (
    <div className="section HomeC">
      <div className="container inHomeC">
        <div className="left">
          <h2>Lorem ipsum dolor sit</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam voluptatum esse cupiditate, aut omnis?
          </p>
          
          <div className="homeClBtn">
            <Link className="siteBtn" to="/counselling">
              <BiCalendarCheck className="icon" /> Free Counselling
            </Link>
          </div>
        </div>
        <div className="right">
          <Slider {...settings}>
            {TrustedTestimonyData.map((item, i) => {
              return (
                <div className="slideBox" key={i}>
                  <div className="top arrowBox">
                    <p>
                      {item.desc}
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="SbLeft">
                      <div className="sBlImg">
                        <img
                          src={item.avatar}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="SbRight">
                      <p>{item.name}</p>
                      <p>{item.nameDesc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
