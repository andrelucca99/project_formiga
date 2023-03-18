/* eslint-disable react/jsx-max-depth */
import React from 'react';
import './styles/nav.css';
import {
  ImFacebook,
  ImInstagram,
  ImPhone,
  ImTwitter,
  ImWhatsapp,
  ImYoutube,
} from 'react-icons/im';
import Image from '../utils/Image';

function Nav() {
  return (
    <section className="menu">
      <aside className="menu-redes">
        <section className="menu-redes-info">
          <p className="nav-tel">
            <ImPhone />
            11. 3205-2442
          </p>
          <p className="nav-tel">
            <ImWhatsapp />
            11. 94128-9701
          </p>
          <ImFacebook />
          <ImInstagram />
          <ImTwitter />
          <ImYoutube />
          <p>EN</p>
          <p>PT</p>
          <p>ES</p>
        </section>
      </aside>
      <section className="menu-nav">
        <figure>
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/LOGO-FORMIGA-DIGITAL-1-1536x401.png" alt="foto do logo" />
        </figure>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre a Forminga</li>
            <li>Serviços</li>
            <li>Blog</li>
            <li>
              <button type="button" className="btn-nav">
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default Nav;
