import React from 'react';
import Button from '../utils/Button';
import Image from '../utils/Image';
import './styles/specialist.css';

function Specialist() {
  return (
    <section className="speak-specialist">
      <section className="title-specialist">
        <h2>Fale com um especialista</h2>
        <p>
          Clique aqui e solicite um orçamento personalizado
          <br />
          para sua empresa
        </p>
        <Button>Solicite um orçamento</Button>
      </section>

      <figure className="image-specialist">
        <Image image="https://formiga.digital/wp-content/uploads/2022/11/mascote-formiga-digital-2.jpg" alt="foto" />
      </figure>

      <figure className="image-specialist">
        <Image image="https://prints.ultracoloringpages.com/be116cbedc08ee724a05f8940d871c56.png" alt="foto" />
      </figure>
    </section>
  );
}

export default Specialist;
