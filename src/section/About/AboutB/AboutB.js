import "./style.scss";

export default function AboutB() {
  const teamData = [
    {
      img: "https://iili.io/Dpx3v9.png",
      name: "Kunle Tolani",
      desc: "Product Development Executive",
    },
    {
      img: "https://iili.io/DpoMzb.png",
      name: "Bunmi Balogun",
      desc: "counselling Executive",
    },
    {
      img: "https://iili.io/Dpq6Hg.png",
      name: "Florence Abagbe",
      desc: "Business Development Executive",
    },
    {
      img: "https://iili.io/Dpf3kG.png",
      name: "Coker Davies",
      desc: "Branch Manager",
    },
  ];
  return (
    <div className="section AboutB">
      <div className="container inAboutB">
        <div className="title">
          <h2>A Team With Vision</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
            aliquid iusto, id odit eveniet quod.
          </p>
        </div>
      </div>
      <div className="mM8nj">
        <div className="container MmM8nj">
          {teamData.map((item, i) => {
            return (
              <div className="tBox" key={i}>
                <div className="tBoxImg">
                  <img src={item.img} alt="" />
                </div>
                <div className="tBoxText">
                  <h6>{item.name}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
