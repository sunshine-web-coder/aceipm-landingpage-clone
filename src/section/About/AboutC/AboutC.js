import Slider from "react-slick";
import "./style.scss";

const settings = {
  dots: true,
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
        slidesToShow: 4,
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
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function AboutC() {
  const clientData = [
    {
      img: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1614851099518-055a1000e6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1590874315261-788881621f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1554463529-e27854014799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1575395311793-ad870d50fbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="section AboutC">
      <div className="container inAboutC">
        <div className="title">
          <h2>Our Clientele</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            quisquam itaque beatae obcaecati reprehenderit.
          </p>
        </div>
        <div className="clientSlideCont">
          <Slider {...settings}>
            {clientData.map((item, i) => {
              return (
                <div className="clientSlide" key={i}>
                  <div className="iNcSlideBox">
                    <img src={item.img} alt="clientData" />
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
