import { Link } from "react-router-dom";
import Slider from "react-slick";
import { TrustedTestimonyData } from "../../../component/allDatas";
import "./style.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,

  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function CourseE() {
  return (
    <div className="section CourseE">
      <div className="title">
        <h2>Our Juniors Love Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora animi
          sapiente quae non saepe. Quod.
        </p>
      </div>

      <div className="container inCourseUh7">
        <div className="cSlideShow">
          <Slider {...settings}>
            {TrustedTestimonyData.map((item, i) => {
              return (
                <div className="slideBox" key={i}>
                  <div className="inSlideBox">
                    <div className="top arrowBox">
                      <p>{item.desc}</p>
                    </div>
                    <div className="bottom">
                      <div className="SbLeft">
                        <div className="sBlImg">
                          <img src={item.avatar} alt="" />
                        </div>
                      </div>
                      <div className="SbRight">
                        <p>{item.name}</p>
                        <p>{item.nameDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="c6yM">
          <a href="#pricing">
            <span class="spanAnime"></span>
            <span>Lorem ipsum IPSUM Preparation With AMeT</span>
            <span>Lorem ipsum dolor sit amet consectetur</span>
          </a>
        </div>
      </div>
    </div>
  );
}
