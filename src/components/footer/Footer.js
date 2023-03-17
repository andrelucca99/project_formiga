/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Image from '../utils/Image';
import Copyright from './Copyright';
import './styles/footer.css';

function Footer() {
  return (
    <footer className="section-footer">
      <section className="footer-infos">
        <section className="columuns">
          <figure>
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/LOGO-FORMIGA-DIGITAL-1-1536x401.png" alt="Logo" />
          </figure>
          <ul>
            <li>
              Av. Cassandoca, N 457
              <br />
              Salas 2 e 4, Mooca, SP
            </li>
            <li>11. 3205-2442</li>
            <li>11. 3205-2469</li>
            <li>11. 94128-9701</li>
            <li>contato@formigadigital.com.br</li>
          </ul>
          <h3>APOIE</h3>
          <div className="icons-apoio">
            <figure className="foto-apoio">
              <Image image="https://formiga.digital/wp-content/uploads/2022/11/AACD-LOGO-PNG.png" alt="AACD Logo" />
            </figure>
            <figure className="foto-apoio">
              <Image image="https://formiga.digital/wp-content/uploads/2022/11/associacao.png" alt="Logo Associação" />
            </figure>
          </div>
        </section>
        <section className="columuns">
          <h3 className="footer-title">NOSSOS SERVIÇOS</h3>
          <ul>
            <li>Criação</li>
            <li>Gestão de Redes Sociais</li>
            <li>Web - SEO - Suporte e Hospedagem</li>
            <li>Tráfego Pago</li>
            <li>
              Inbound, Outbound Marketing e
              <br />
              Social Selling
            </li>
            <li>Terceirização de Serviços</li>
            <li>Marketing para Saúde</li>
          </ul>
          <div className="icons-servico">
            <figure className="foto-servico">
              <Image image="https://formiga.digital/wp-content/uploads/2022/11/agencia-de-marketing-digital-3.png" alt="Logo Servico" />
            </figure>
          </div>
        </section>
        <section className="columuns">
          <h3 className="footer-title">SOBRE A FORMIGA</h3>
          <ul>
            <li>Home</li>
            <li>Sobre a Formiga Digital</li>
            <li>Blog</li>
            <li>Faça parte do Formigueiro</li>
            <li>Solicite um Orçamento</li>
            <li>Política de privacidade</li>
          </ul>
          <h3>NOS ACOMPANHE!</h3>
          <div className="footer-redes">redes</div>
        </section>
        <section className="columuns">
          <h3 className="footer-title">CEO DA AGÊNCIA</h3>
          <section className="columuns_ceo">
            <div className="foto-linkedin">
              <figure className="linkedin">
                <Image image="https://formiga.digital/wp-content/uploads/2022/11/LinkedIn_Logo.svg-1536x417.png" alt="Logo Linkedin" />
              </figure>
            </div>

            <div className="foto-CEO">
              <figure className="CEO">
                <Image image="https://formiga.digital/wp-content/uploads/2022/11/26c91561-2e1f-46e6-88f2-85d9e6bf7bd7.jpg" alt="Foto CEO" />
              </figure>
            </div>
            <h3>Marco Freitas</h3>

            <div className="section-star-5">
              <figure className="star-5">
                <Image image="https://static.vecteezy.com/ti/vetor-gratis/p3/3355389-ilustracaoial-de-sinal-de-classificacao-de-cinco-estrelas-gratis-vetor.jpg" alt="5 Estrelas" />
              </figure>
            </div>

            <p>
              CEO e Founder na Formiga Digital Consultor de Marketing Digital
              Senior Palestrante
            </p>
            <p>Agência Formiga Digital | Universidade Anhembi Morumbi</p>

            <button type="button">Ver Perfil</button>
          </section>
        </section>
      </section>
      <Copyright />
    </footer>
  );
}

export default Footer;
