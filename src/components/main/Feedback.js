/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Image from '../utils/Image';
import './styles/feedback.css';

function Feedback() {
  return (
    <section className="section-carrossel-feedback">
      <section className="title-feedback">
        <p>O QUE NOSSOS CLIENTES</p>
        <h2>DIZEM SOBRE NÓS</h2>
      </section>
      <section className="carrossel-feedback">
        <figure>
          <Image image="https://cdn.trustindex.io/assets/platform/Google/logo.svg" alt="foto" />

          <Image image="https://static.vecteezy.com/ti/vetor-gratis/p3/3355389-ilustracaoial-de-sinal-de-classificacao-de-cinco-estrelas-gratis-vetor.jpg" alt="foto" />
          <figcaption>
            <p>
              <strong>EXCELENTE</strong>
            </p>
            <br />
            <p>
              Com base em <strong>145 avaliações</strong>
            </p>
          </figcaption>
        </figure>
        <section className="slide">carrossel</section>
      </section>
    </section>
  );
}

export default Feedback;
