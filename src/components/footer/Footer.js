/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { BiLocationPlus } from 'react-icons/bi';
import { ImFacebook, ImInstagram, ImMail2, ImPhone, ImTwitter, ImYoutube } from 'react-icons/im';
import Image from '../utils/Image';
import Copyright from './Copyright';
import './styles/footer.css';
import { card } from '../utils/mocks/CardCEO';

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
              <BiLocationPlus className="space-right" /> Av. Cassandoca, N 457
              <br />
              Salas 2 e 4, Mooca, SP
            </li>
            <li><ImPhone className="space-right" /> 11. 3205-2442</li>
            <li><ImPhone className="space-right" /> 11. 3205-2469</li>
            <li><ImPhone className="space-right" /> 11. 94128-9701</li>
            <li><ImMail2 className="space-right" /> contato@formigadigital.com.br</li>
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
            <li><AiOutlineRight className="space-right" />Criação</li>
            <li><AiOutlineRight className="space-right" />Gestão de Redes Sociais</li>
            <li><AiOutlineRight className="space-right" />Web - SEO - Suporte e Hospedagem</li>
            <li><AiOutlineRight className="space-right" />Tráfego Pago</li>
            <li>
              <AiOutlineRight className="space-right" />
              Inbound, Outbound Marketing e
              <br />
              Social Selling
            </li>
            <li><AiOutlineRight className="space-right" />Terceirização de Serviços</li>
            <li><AiOutlineRight className="space-right" />Marketing para Saúde</li>
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
            <li><AiOutlineRight className="space-right" />Home</li>
            <li><AiOutlineRight className="space-right" />Sobre a Formiga Digital</li>
            <li><AiOutlineRight className="space-right" />Blog</li>
            <li><AiOutlineRight className="space-right" />Faça parte do Formigueiro</li>
            <li><AiOutlineRight className="space-right" />Solicite um Orçamento</li>
            <li><AiOutlineRight className="space-right" />Política de privacidade</li>
          </ul>
          <h3>NOS ACOMPANHE!</h3>
          <div className="footer-redes">
            <ImFacebook className="rede" />
            <ImInstagram className="rede" />
            <ImTwitter className="rede" />
            <ImYoutube className="rede" />
          </div>
        </section>
        <section className="columuns">
          <h3 className="footer-title">CEO DA AGÊNCIA</h3>

          {card.map((item) => (
            <section key={ item.id } className="columuns_ceo">
              <div className="foto-linkedin">
                <figure className="linkedin">
                  <Image image={ item.image_linkedin } alt={ item.alt } />
                </figure>
              </div>

              <div className="foto-CEO">
                <figure className="CEO">
                  <Image image={ item.image_perfil } alt={ item.alt } />
                </figure>
              </div>

              <h3>{ item.name }</h3>

              <div className="section-star-5">
                <figure className="star-5">
                  <Image image={ item.image } alt={ item.alt } />
                </figure>
              </div>

              <p>{ item.paragrafh_1 }</p>
              <p>{ item.paragrafh_2 }</p>

              <button type="button">Ver Perfil</button>
            </section>
          ))}
        </section>
      </section>
      <Copyright />
    </footer>
  );
}

export default Footer;
