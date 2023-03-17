/* eslint-disable react/jsx-max-depth */
import React from 'react';
import './styles/form.css';
import Button from '../utils/Button';
import Input from '../utils/Input';
import TitlteLeft from '../utils/TitlteLeft';

function Form() {
  return (
    <div className="formulario">
      <TitlteLeft>
        <p>JUNTE-SE A FORMIGA</p>
        <h2>SOLICITE O SEU ORÇAMENTO</h2>
      </TitlteLeft>

      <form action="#" method="post" className="camp_form">
        <div className="camp">
          <label htmlFor="nome">
            Nome
            <br />
            <Input type="text" id="nome" />
          </label>
          <label htmlFor="email">
            E-mail
            <br />
            <Input type="email" id="email" />
          </label>

          <label htmlFor="tel">
            Telefone
            <br />
            <Input type="number" id="tel" />
          </label>
        </div>

        <div className="camp">
          <label htmlFor="empresa">
            Empresa
            <br />
            <Input type="text" id="empresa" />
          </label>

          <label htmlFor="cargo">
            Qual seu cargo?
            <br />
            <select name="select" id="cargo">
              <option>Sócio/CEO/Presidente</option>
              <option>Diretor</option>
              <option>Gerente/Colaborador/Diretor</option>
              <option>Analista</option>
              <option>Estagiário</option>
            </select>
          </label>

          <label htmlFor="segmento">
            Segmento da empresa
            <br />
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
          <label htmlFor="msg">Conte um pouco sobre a sua necessidade:</label>
          <br />
          <textarea id="msg" rows="4" cols="50" />
        </div>

        <div className="camp_cantact">
          <label htmlFor="type-contact">
            Que tipo de contato prefere receber?
            <br />
            <select name="select" id="type-contact">
              <option>WhatsApp</option>
              <option>E-mail</option>
              <option>Telefone</option>
              <option>Reunião Presencial</option>
            </select>
          </label>

          <label htmlFor="period">
            Qual período prefere receber contato?
            <br />
            <select name="select" id="period">
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Indiferente</option>
            </select>
          </label>
        </div>

        <div className="btn_form">
          <Button>ENVIAR SOLICITAÇÃO</Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
