import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./style.scss";

export default function CourseBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="section CourseBanner">
      <div className="container inBanner">
        <div className="title">
          <h1>
            greater set light had and isn't were land. <br />
            Be light they're..
          </h1>
          <p>
          There are many variations of passages of Lorem Ipsum available, 
            <strong style={{ color: "#ff00ea" }}>
              &nbsp;but the MAJORITY have suffered  &nbsp;
            </strong>
            alteration in some form,
            <strong style={{ color: "#ff00ea" }}>
              {" "}
              &nbsp; by injected HUMOUR, or randomized {" "}
            </strong>
            words which don't look even slightly believable.
          </p>
        </div>
        <div className="Y7JNMr">
          <div className="Y7JNMrCont">
            <div className="Y7JNMrbox">
              <div className="InY7JNMrbox">
                <div className="icon">
                  <i class="fa-solid fa-users"></i>
                </div>
                <h4>1520+</h4>
                <p>Students trained</p>
              </div>
              <div className="InY7JNMrbox">
                <div className="icon">
                  <i class="fa-solid fa-star"></i>
                </div>
                <h4>4.5/5</h4>
                <p>Average Rating</p>
              </div>
            </div>

            <div className="Y7JNMrbox">
              <div className="InY7JNMrbox">
                <div className="icon">
                  <i class="fa-solid fa-medal"></i>
                </div>
                <h4>120+</h4>
                <p>IPSUM selections</p>
              </div>
              <div className="InY7JNMrbox">
                <div className="icon">
                  <i class="fa-solid fa-user-graduate"></i>
                </div>
                <h4>12+</h4>
                <p>Mentors from IPSUM</p>
              </div>
            </div>
          </div>

          <div className="Y7JNMrbox">
            <img
              src="https://images.unsplash.com/photo-1616469829526-7057a1427626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <BiPlay className="play-icon" />
          </div>
        </div>

        <div className="c6yM">
          <a href="#pricing">
            <span class="spanAnime"></span>
            <span>There are many variations of passages of IPSUM course</span>
            <span>but the MAJORITY have price</span>
          </a>
        </div>

        <div className="c17Im">
        <p>
          There are many variations of passages of Lorem Ipsum available, 
            <strong style={{ color: "#ff00ea" }}>
              &nbsp;but the MAJORITY have suffered  &nbsp;
            </strong>
            alteration in some form,
            <strong style={{ color: "#ff00ea" }}>
              {" "}
              &nbsp; by injected HUMOUR, or randomized {" "}
            </strong>
            words which don't look even slightly believable.
          </p>
        </div>

        <div className="c07umM">
          <Slider {...settings}>
            <div className="c07umMSlideBox">
              <div className="inC07umMSlideBox">
                <BiPlay className="play-icon" />
              </div>
            </div>
            <div className="c07umMSlideBox">
              <div className="inC07umMSlideBox inC07umMSlideBox2">
                <BiPlay className="play-icon" />
              </div>
            </div>
            <div className="c07umMSlideBox">
              <div className="inC07umMSlideBox inC07umMSlideBox3">
                <BiPlay className="play-icon" />
              </div>
            </div>
            <div className="c07umMSlideBox">
              <div className="inC07umMSlideBox inC07umMSlideBox4">
                <BiPlay className="play-icon" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
