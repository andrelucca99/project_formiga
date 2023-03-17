/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Button from '../utils/Button';
import Image from '../utils/Image';
import './styles/banner.css';

function Banner() {
  return (
    <section className="banner">
      <article className="banner-title">
        <h1>
          Faça parte do
          <span> Formigueiro!</span>
          <br />
          Apareça e venda mais.
        </h1>
        <p>
          Somos uma agência de
          <strong>marketing digital</strong>
          com foco em
          <br />
          <span>criação, web, tráfego pago</span>
          com objetivo em geração de
          <br />
          <strong>leads,</strong>
          automação de marketing, social selling, desempenho
          <br />e<strong>funil de vendas,</strong>
          offline, eventos e etc.
        </p>

        <div className="banner-btn">
          <Button>Conheça nossos serviços</Button>
        </div>
      </article>
      <figure className="banner-foto">
        <Image
          image="https://formiga.digital/wp-content/uploads/2022/11/mascote-formiga-digital-2.jpg"
          alt="foto do banner"
        />
      </figure>
    </section>
  );
}

export default Banner;
