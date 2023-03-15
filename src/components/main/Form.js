import React from 'react';
import "./styles/form.css";
import Button from "../utils/Button";

function Form() {
  return (
    <div className="formulario">
        <article className="title-form">
            <p>JUNTE-SE A FORMIGA</p>
            <h2>SOLICITE O SEU ORÇAMENTO</h2>
        </article>
        <form action="#" method="post" className="camp_form">
          <div className="camp">
            <label for="nome">Nome<br />
              <input type="text" id="nome" />
            </label>
            <label for="email">E-mail<br />
              <input type="email" id="email" />
            </label>

            <label for="tel">Telefone<br />
              <input type="number" id="tel" />
            </label>
          </div>

          <div className="camp">
            <label for="empresa">Empresa<br />
              <input type="text" id="empresa" />
            </label>

            <label for="cargo">Qual seu cargo?<br />
              <select name="select" id="cargo">
                <option>Sócio/CEO/Presidente</option>
                <option>Diretor</option>
                <option>Gerente/Colaborador/Diretor</option>
                <option>Analista</option>
                <option>Estagiário</option>
              </select>
            </label>

            <label for="segmento">Segmento da empresa<br />
              <select name="select" id="segmento">
                <option>Saúde</option>
                <option>E-commerce</option>
                <option>Educação</option>
                <option>Varejo</option>
                <option>Construtora/Imobiliária</option>
                <option>Automotivo</option>
                <option>Tecnologia</option>
                <option>Industria</option>
                <option>Serviços</option>
                <option>Outros</option>
              </select>
            </label>
          </div>

          <div className="camp_text">
            <label for="msg">Conte um pouco sobre a sua necessidade:</label><br />
            <textarea id="msg" rows="4" cols="50"></textarea>
          </div>

          <div className="camp_cantact">
            <label for="type-contact">Que tipo de contato prefere receber?<br />
              <select name="select" id="type-contact">
                <option>WhatsApp</option>
                <option>E-mail</option>
                <option>Telefone</option>
                <option>Reunião Presencial</option>
              </select>
            </label>

            <label for="period">Qual período prefere receber contato?<br />
              <select name="select" id="period">
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Indiferente</option>
              </select>
            </label>
          </div>

          <div className="btn_form">
            <Button text="ENVIAR SOLICITAÇÃO" />
          </div>

        </form>
    </div>
  );
}

export default Form;
