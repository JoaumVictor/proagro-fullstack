import "./style.scss";

export default function CommunicationAndLosses() {
  return (
    <div className="plan-1-container">
      <form className="sender-form" action="sender-form">
        <p>Preencha o formulário</p>
        <label htmlFor="name">
          <input type="text" placeholder="Nome Completo" />
        </label>

        <label htmlFor="email">
          <input type="text" placeholder="Email" />
        </label>

        <label htmlFor="cpf">
          <input type="text" placeholder="CPF" />
        </label>

        <label htmlFor="localization">
          <p>Localização da lavoura</p>
          <input type="text" placeholder="altitude" />
          <input type="text" placeholder="longitude" />
        </label>

        <label htmlFor="typeOf">
          <input type="text" placeholder="Qual o tipo da sua lavoura?" />
        </label>

        <label htmlFor="data">
          <p>Qual a data do evento?</p>
          <input type="date" />
        </label>

        <label htmlFor="type">
          <p>Qual o evento ocorrido?</p>
          <select name="lavoura">
            <option>CHUVA EXCESSIVA</option>
            <option>GEADA</option>
            <option>GRANIZO</option>
            <option>SECA</option>
            <option>VENDAVAL</option>
            <option>RAIO</option>
          </select>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
