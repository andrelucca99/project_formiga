import React from 'react';
import Button from '../utils/Button';
import Image from '../utils/Image';
import './styles/specialist.css';
import { specialist } from '../utils/mocks/Specialist';

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

      <section className="images-specialist">
        {specialist.map((item) => (
          <figure key={ item.id } className="image">
            <Image image={ item.image } alt={ item.alt } />
          </figure>
        ))}
      </section>
    </section>
  );
}

export default Specialist;
