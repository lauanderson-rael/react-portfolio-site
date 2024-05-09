import { Container } from "./styles";
import Logo from '../../assets/logo2.png'

export function Header(){
    return(
        <Container>
            <div className="interface">
                <div className="logo">
                    <a href="#">
                        <img src={Logo} alt="logo" />
                    </a>
                </div>

                <nav className="menu-desktop">
                    <ul>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Especialidades</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Projetos</a></li>
                    </ul>
                </nav>

                <div className="btn-contato">
                    <a href="#">
                        <button>Contato</button>
                    </a>
                </div>
            </div>
        </Container>
)}
