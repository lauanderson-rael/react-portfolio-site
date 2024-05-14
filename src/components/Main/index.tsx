import { Container, Footer, SessaoFormulario } from "./styles";
import Foto from "../../assets/lau-circle1.png";
import Foto2 from "../../assets/fotoArLivre.jpg";
import Logo from "../../assets/logo2.png";
import { FaLaptopCode } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaWordpress } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { Item } from "./item";
import { Projeto } from "./projeto";

export function Main() {
  return (
    <>
      <Container>
        <section className="topo-do-site">
          <div className="interface">
            <div className="flex">
              <div className="txt-topo-site">
                <h1>
                  TRANSFORMANDO IDEIAS EM REALIDADE DIGITAL<span>.</span>
                </h1>
                <p>
                  Olá, me chamo Lauanderson. Tenho 20 anos e atualmente estou
                  cursando o 2° período de Análise e desenvolvimento de Sistemas
                  pelo IFMA, e estudando React. Já possuo conhecimentos em
                  front-end e sei utilizar HTML5, CSS3 e Javascript, além de
                  resolver problemas rotineiros utilizando a linguagem Python
                </p>
                <div className="btn-contato">
                  <a href="#">
                    <button>Entre em contato</button>
                  </a>
                </div>
              </div>

              <div className="img-topo-site">
                <img src={Foto} alt="foto perfil" />
              </div>
            </div>
          </div>
        </section>

        <section className="especialidades">
          <div className="interface">
            <h2 className="titulo">
              MINHAS <span>ESPECIALIDADES</span>
            </h2>
            <div className="flex">
              <Item
                icone={<FaLaptopCode />}
                nome="Website"
                paragrafo="Um website é uma coleção de páginas da web interconectadas, acessíveis através da internet. Websites são usados para diversos propósitos, como fornecer informações sobre uma empresa, produto ou serviço, compartilhar conteúdo pessoal ou profissional, vender produtos online, entre outros. Eles são uma ferramenta fundamental para comunicação, comércio e interação na era digital."
              />
              <Item
                icone={<IoCart />}
                nome="Loja online"
                paragrafo="A loja virtual é o site onde uma pessoa pode comprar produtos pela internet. Já uma loja online, que também é chamada de e-commerce, tem a ver com começar um negócio para vender produtos a partir da internet. Ou seja, uma loja física também pode ter uma loja virtual para vender os produtos da marca."
              />
              <Item
                icone={<FaWordpress />}
                nome="Blog"
                paragrafo="Um blog é um tipo de site onde as pessoas compartilham regularmente conteúdo novo sobre uma variedade de tópicos. Pode incluir desde notícias e opiniões pessoais até tutoriais, receitas, viagens e muito mais. É uma plataforma para comunicação, expressão criativa e compartilhamento de informações na internet."
              />
            </div>
          </div>
        </section>

        <section className="sobre">
          <div className="interface">
            <div className="flex">
              <div className="img-sobre">
                <img src={Foto2} alt="foto sessão sobre" />
              </div>

              <div className="txt-sobre">
                <h2>
                  MUITO PRAZER, <span>SOU LAUANDERSON RAEL</span>
                </h2>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio">
          <div className="interface">
            <h2 className="titulo">
              MEU <span>PORTFÓLIO.</span>
            </h2>
            <div className="flex">
              <Projeto nome="Projeto 1" />
              <Projeto nome="Projeto 2" />
              <Projeto nome="Projeto 3" />
            </div>
          </div>
        </section>

        <SessaoFormulario>
          <div>
            <h2 className="titulo">
              FALA<span> COMIGO</span>
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
            </div>
          </div>
        </div>
        <div className="line-footer borda">
          <p>
            <i>
              <IoIosMail />
            </i>
            <a href="maioto:lauanderson38@gmail.com">lauanderson38@gmail.com</a>
          </p>
        </div>
      </Footer>
    </>
  );
}
