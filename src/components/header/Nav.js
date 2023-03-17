/* eslint-disable react/jsx-max-depth */
import React from 'react';
import './styles/nav.css';
import Image from '../utils/Image';

function Nav() {
  return (
    <section className="menu">
      <aside className="menu-redes">rede</aside>
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
