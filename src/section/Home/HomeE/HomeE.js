import { Link } from "react-router-dom";
import "./style.scss";

export default function HomeE() {
  const BlogData = [
    {
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Lorem IPSUM dolor",
      author: "Dele Momodu",
      authorUrl: "",
      date: "May 10, 2022",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis ipsa, totam cumque debitis, odit earum molestias officia dolor accusamus eveniet! Fugi",
      url: "",
    },
    {
      img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Lorem IPSUM dolor",
      author: "Dele Momodu",
      authorUrl: "",
      date: "April 18, 2022",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis ipsa, totam cumque debitis, odit earum molestias officia dolor accusamus eveniet! Fugi",
      url: "",
    },
    {
      img: "https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Lorem IPSUM dolor",
      author: "Dele Momodu",
      authorUrl: "",
      date: "April 10, 2022",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis ipsa, totam cumque debitis, odit earum molestias officia dolor accusamus eveniet! Fugi",
      url: "",
    },
  ];
  return (
    <div className="section HomeE">
      <div className="container inHomeE">
        <div className="title">
          <h2>Blog</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed
            voluptate laudantium id voluptatibus voluptatem esse quaerat
            accusamus aliquam dignissimos.
          </p>
        </div>
        <div className="HomeECont">
          {BlogData.map((item, i) => {
            return (
              <div className="BlogAContBox">
                <div className="imgBox">
                  <Link to={item.url}>
                    <img src={item.img} alt="" />
                  </Link>
                  
                </div>
                <div className="boxContent">
                  <Link to={item.url}>
                    <h3>{item.title}</h3>
                  </Link>
                  <div className="HeUnN">
                    <Link to={item.authorUrl}>
                      <span>{item.author}</span>
                    </Link>
                    <span>{item.date}</span>
                  </div>
                  <p>{item.desc}</p>
                  <div className="MuijLi">
                    <Link className="siteBtn" to={item.url}>
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="MuijLM">
        <Link className="siteBtn" to="/blog">
          <span>
            <span>Read Our Blog</span> <span><i class="fa-solid fa-arrow-right"></i></span>
          </span>
        </Link>
      </div>
    </div>
  );
}
