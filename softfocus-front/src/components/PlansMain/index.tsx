import "./style.scss";
import plansImages from "../../images";
import { useNavigate } from "react-router-dom";

export default function PlansMain() {
  const navigate = useNavigate();
  const alertMessage = () => alert("Essa funcionalidade não foi implementada!");
  const redirect = () => navigate("/plans/communication-and-losses");

  return (
    <main className="plans-main-container">
      <h1>Escolha uma solução</h1>
      <div className="plans-box">
        <button type="button" onClick={redirect}>
          <img src={plansImages.image1} alt="primeiro plano" />
        </button>

        <button type="button" onClick={alertMessage}>
          <img src={plansImages.image2} alt="segundo plano" />
        </button>

        <button type="button" onClick={alertMessage}>
          <img src={plansImages.image3} alt="terceiro plano" />
        </button>

        <button type="button" onClick={alertMessage}>
          <img src={plansImages.image4} alt="quarto plano" />
        </button>
      </div>
    </main>
  );
}
