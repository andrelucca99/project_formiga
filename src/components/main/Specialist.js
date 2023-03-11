import React from 'react';
import "./styles/specialist.css";

function Specialist() {
  return (
    <section className="speak-specialist">
        <section className="title-specialist">
            <h2>Fale com um especialista</h2>
            <p>
                Clique aqui e solicite um orçamento personalizado<br />
                para sua empresa
            </p>
            <button type="button">Solicite um orçamento</button>
        </section>

        <section className="image-specialist">
            <img src="https://formiga.digital/wp-content/uploads/2022/11/mascote-formiga-digital-2.jpg" alt="foto" />
        </section>

        <section className="image-specialist">
            <img src="https://prints.ultracoloringpages.com/be116cbedc08ee724a05f8940d871c56.png" alt="foto" />
        </section>
    </section>
  );
}

export default Specialist;
