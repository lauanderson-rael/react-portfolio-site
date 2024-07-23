import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

export const ContainerSkills = () =>{


    return (
    <>
            <div className="especialidades-box">
                <strong>Front-end</strong>
                  <div className="flex-skills">
                    <div className="center">
                      <div className="icone"> <SiJavascript/></div>
                      <p>JavaScript</p>
                    </div>
                    <div className="center">
                      <div className="icone"> <SiTailwindcss/></div>
                      <p>TailwindCSS</p>
                    </div>
                    <div className="center">
                      <div className="icone"> <SiTypescript/></div>
                      <p>TypeScript</p>
                    </div>
                    <div className="center">
                      <div className="icone"> <FaReact/></div>
                      <p>React</p>
                    </div>
                  </div>
              </div>

              <div className="especialidades-box">
                <strong>Back-end</strong>
                  <div className="flex-skills">
                    <div className="center">
                      <div className="icone"> <FaNodeJs/></div>
                      <p>Node.js</p>
                    </div>
                    <div className="center">
                      <div className="icone"> <SiExpress/></div>
                      <p>Express.js</p>
                    </div>
                  </div>
            </div>
    </>
)}
