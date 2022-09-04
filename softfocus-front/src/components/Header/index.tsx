import logotipo from "../../images/proagrofacil.svg";
import "./style.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src={logotipo} alt="logotipo proagro" />
      <nav>
        <a href="/">Funcionalidades</a>
        <a href="/">Sobre Nós</a>
      </nav>
      <Link to="/plans">
        <button className="see-we-plans">Veja nossas soluções</button>
      </Link>
    </header>
  );
}
