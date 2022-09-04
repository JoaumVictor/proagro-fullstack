import { Link } from "react-router-dom";
import "./style.scss";

export default function HomeMain() {
  return (
    <div className="home-main-container">
      <div className="home-center-box">
        <h1 className="title">
          Somos especialistas <br /> em facilitar a gestão do Proagro
        </h1>
        <Link to="/plans">
          <button className="see-we-plans">Veja nossas soluções</button>
        </Link>
      </div>
    </div>
  );
}
