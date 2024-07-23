import { Container, Footer, SessaoFormulario } from "./styles";
import Foto from "../../assets/lau-circle1.png";
import Foto2 from "../../assets/foto2.jpg";
import Logo from "../../assets/logo2.png";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Projeto } from "./projeto";
import { ContainerSkills } from "./containerSkills";

export function Main() {
  return (
    <>
      <Container>
        <section className="topo-do-site">
          <div className="interface">
            <div className="flex">
              <div className="txt-topo-site">

                <div className="informacoes">
                  <p>Olá, eu sou</p>

                  <strong>Lauanderson Rael</strong>

                  <p>Desenvolvedor Front-end</p>
                </div>

                <div style={{ display: "flex", gap: "30px" }}>
                  <div className="btn-contato linkedin">
                    <a href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/" target="_blank">
                      <button> <FaLinkedin style={{ width: "30px" }} /> Linkedin</button>
                    </a>
                  </div>

                  <div className="btn-contato github">
                    <a
                      href="https://github.com/lauanderson-rael"
                      target="blank"
                      download={"curriculo.pdf"}>
                      <button><FaGithub style={{ width: "30px" }} /> GitHub</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img-topo-site">
                <img src={Foto} alt="foto perfil" />
              </div>
            </div>

          </div>
        </section>

        <section className="sobre" id="sobre">
          <div className="interface">
            <div className="flex">
              <div className="img-sobre">
                <img src={Foto2} alt="foto sessão sobre" />
              </div>

              <div className="txt-sobre">
                <h2>
                  Sobre <b style={{ color: "#00ff08" }}>mim</b>
                </h2>
                <div className="img-sobre img-sobre-mobile">
                  <img src={Foto2} alt="foto sessão sobre" />
                </div>
                <p>
                  Apaixonado por desafios e tecnologia, sou um desenvolvedor web
                  júnior com experiência em HTML, CSS e JavaScript, dando meus
                  primeiros passos no mundo do ReactJS. No momento estou
                  cursando o 2º semestre de Análise e Desenvolvimento de
                  Sistemas. Adoro explorar novas tecnologias, desafiar minhas
                  habilidades com os códigos e utilizá-las para criar soluções
                  inovadoras e de alta qualidade.
                </p>
                <p>
                  Atualmente desenvolvo projetos pessoais para praticar minhas
                  habilidades e construir meu portfólio. Isso incluir sites
                  simples, aplicativos da web e até mesmo contribuições para
                  projetos de código aberto.
                </p>

                <div className="btn-contato curriculo">
                  <a
                    href="https://drive.google.com/file/d/1-QXgMBqasKJxM4YEAd7G7C7AWlut7ojf/view?usp=sharing"
                    target="blank"
                    download={"curriculo.pdf"}>
                    <button> <FaCloudDownloadAlt style={{ width: "30px" }} /> Currículo</button>
                  </a>
                </div>

                <div className="btn-social">
                  <a href="https://www.instagram.com/lauanderson.rael?igsh=MWMxNDZjN3VhdjA3Nw==" target="blank">
                    <button>
                      <FaInstagram />
                    </button>
                  </a>
                  <a href="https://www.youtube.com/@lau_dicas" target="blank">
                    <button>
                      <FaYoutube />
                    </button>
                  </a>
                  <a href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/" target="blank">
                    <button>
                      <FaLinkedin />
                    </button>
                  </a>
                  <a href="https://github.com/lauanderson-rael" target="blank">
                    <button>
                      <FaGithub />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="especialidades" id="especialidades">
          <div className="interface">
            <h2 className="titulo">
              Minhas <span>habilidades</span>
            </h2>
            <div className="flex-NO">

              <ContainerSkills/>

            </div>
          </div>
        </section>

        <section className="portfolio" id="projetos">
          <div className="interface">
            <h2 className="titulo">
              Meus <span>Projetos</span>
            </h2>
            <div className="flex">
              <Projeto nome="Em desenvolvimento..." />
              <Projeto nome="Em desenvolvimento..." />
              <Projeto nome="Em desenvolvimento..." />
            </div>
          </div>
        </section>

        <span id="formulario"></span>
        <SessaoFormulario>
          <div>
            <h2 className="titulo">
              Fale<span> comigo</span>
            </h2>

            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Seu nome completo"
                required
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Seu e-mail"
                required
              />

              <input type="text" name="" id="" placeholder="Seu celular" />
              <textarea name="" id="" placeholder="Sua mensagem"></textarea>

              <div className="btn-enviar">
                <input type="submit" value="ENVIAR" />
              </div>
            </form>
          </div>
        </SessaoFormulario>
      </Container>

      <Footer>
        <div className="line-footer">
          <div className="flex">
            <div className="logo-footer">
              <img src={Logo} alt="Logotipo portfolio" />
            </div>

            <div className="btn-social">
              <a href="#">
                <button>
                  <FaInstagram />
                </button>
              </a>
              <a href="#">
                <button>
                  <FaYoutube />
                </button>
              </a>
              <a href="#">
                <button>
                  <FaLinkedin />
                </button>
              </a>
              <a href="#">
                <button>
                  <FaGithub />
                </button>
              </a>

              <a href="maioto:lauanderson38@gmail.com">
                <button>
                  <IoIosMail />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="line-footer borda">
          <span>© 2024 Lauanderson Rael. Todos os direitos reservados</span>
        </div>
      </Footer>
    </>
  );
}
