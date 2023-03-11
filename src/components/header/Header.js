import React from 'react';
import Nav from './Nav';
import "./styles/header.css"

function Header() {
  return (
    <header>
        <div className="header-redes">rede</div>
        <Nav />
        <div className="header-banner">
          <div className='banner-title'>
            <h1>Faça parte do <span>Formigueiro!</span><br />
                Apareça e venda mais.
            </h1>
            <p>
              Somos uma agência de <strong>marketing digital</strong> com foco em <br /> <span>criação, web, tráfego pago</span> com objetivo em geração de <br /> <strong>leads,</strong> automação de marketing, social selling, desempenho<br /> e <strong>funil de vendas,</strong> offline, eventos e etc.
            </p>

            <button type="button">Conheça nossos serviços</button>
          </div>

          <img src="https://formiga.digital/wp-content/uploads/2022/11/mascote-formiga-digital-2.jpg" alt="foto-banner" />
          
        </div>
    </header>
  );
}

export default Header;
