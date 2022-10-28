import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "./style.scss";

export default function HomeF() {
  const [openAccord1, setOpenAccord1] = useState(false);
  const [openAccord2, setOpenAccord2] = useState(false);
  const [openAccord3, setOpenAccord3] = useState(false);
  const [openAccord4, setOpenAccord4] = useState(false);
  const [openAccord5, setOpenAccord5] = useState(false);
  const [openAccord6, setOpenAccord6] = useState(false);
  const [openAccord7, setOpenAccord7] = useState(false);
  const [openAccord8, setOpenAccord8] = useState(false);

  return (
    <div className="section HomeF">
      <div className="container inHomeF">
        <div className="title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nam
            delectus, sapiente ullam pariatur sint dolores minima quae rerum
            vitae facere, a laboriosam! Maxime, odio.
          </p>
        </div>
        <div className="HomeFCont">
          <div className="HomeFContLeft">
            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord1(!openAccord1)}
              >
                <h4 className={"h4 " + (openAccord1 && "active")}>
                  Lorem dolor.?{" "}
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord1 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord1 && "active")}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta facilis iste natus debitis, odio velit, voluptatibus
                  dolor modi quaerat quasi illum ea nostrum ab eos!
                </p>
              </div>
            </div>

            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord2(!openAccord2)}
              >
                <h4 className={"h4 " + (openAccord2 && "active")}>
                  Lorem dolor.?{" "}
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord2 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord2 && "active")}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta facilis iste natus debitis, odio velit, voluptatibus
                  dolor modi quaerat quasi illum ea nostrum ab eos!
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquam iusto facere vero commodi, dignissimos ab!
                </p>
              </div>
            </div>

            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord3(!openAccord3)}
              >
                <h4 className={"h4 " + (openAccord3 && "active")}>
                  Lorem dolor.?
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord3 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord3 && "active")}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta facilis iste natus debitis, odio velit, voluptatibus
                  dolor modi quaerat quasi illum ea nostrum ab eos!
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat aperiam commodi explicabo. Excepturi, cupiditate
                  magni?
                </p>
              </div>
            </div>

            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord4(!openAccord4)}
              >
                <h4 className={"h4 " + (openAccord4 && "active")}>
                  Lorem dolor.?
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord4 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord4 && "active")}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta facilis iste natus debitis, odio velit, voluptatibus
                  dolor modi quaerat quasi illum ea nostrum ab eos!
                </p>
              </div>
            </div>
          </div>

          <div className="HomeFContRight">
            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord5(!openAccord5)}
              >
                <h4 className={"h4 " + (openAccord5 && "active")}>
                  Lorem dolor.?
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord5 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord5 && "active")}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nesciunt sunt error ea eveniet distinctio nostrum sapiente
                  minima quidem vel dicta. Quidem ratione dolores explicabo aut.
                </p>
              </div>
            </div>

            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord6(!openAccord6)}
              >
                <h4 className={"h4 " + (openAccord6 && "active")}>
                  Lorem dolor.?
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord6 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord6 && "active")}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa voluptatum doloribus delectus corrupti incidunt quaerat
                  ullam dolorum esse necessitatibus iure!
                </p>
              </div>
            </div>

            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord7(!openAccord7)}
              >
                <h4 className={"h4 " + (openAccord7 && "active")}>
                  Lorem dolor.?
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord7 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord7 && "active")}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  impedit perspiciatis, nulla earum tenetur iusto ducimus illum
                  esse quidem beatae mollitia debitis amet fugit reiciendis.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium odit iure non perferendis ut sit voluptatem
                  excepturi!
                </p>
              </div>
            </div>

            <div className="accordionContainer">
              <div
                className="accordionTitle"
                onClick={() => setOpenAccord8(!openAccord8)}
              >
                <h4 className={"h4 " + (openAccord8 && "active")}>
                  Lorem dolor.?
                  <MdArrowForwardIos
                    className={"arrowIcon " + (openAccord8 && "active")}
                  />
                </h4>
              </div>
              <div className={"accordionBody " + (openAccord8 && "active")}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident nisi voluptatibus repellendus eligendi enim
                  asperiores in, facilis quidem dolores assumenda!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, sapiente. Obcaecati corporis error corrupti quod! Unde,
                  minus exercitationem veritatis perspiciatis consequatur rerum
                  temporibus repellendus cupiditate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
