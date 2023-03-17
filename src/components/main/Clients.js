import React from 'react';
import Image from '../utils/Image';
import Button from '../utils/Button';
import './styles/clients.css';
import Titlte from '../utils/Titlte';

function Clients() {
  return (
    <section className="section-clients">
      <Titlte>
        <p>ALGUM DOS NOSSOS</p>
        <h2>CLIENTES</h2>
      </Titlte>
      <section className="image-clients">
        <section className="image">
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-unitfour-formiga-digital-removebg-preview-1.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-genesis-caixasi-formiga-digital-removebg-preview.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-dr-igor-lepski-formiga-digital.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/download-1.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-logo-innopharma-formiga-digital-formiga-digital-removebg-preview.png" alt="foto" />
          </figure>
        </section>

        <section className="image">
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-core-first-tech-formiga-digital-1.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-colegio-caminho-do-sol-formiga-digital-e1657207163399.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-navio-homero-formiga-digital-e1657207141453.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-formalisa-formiga-digital-1.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-buffet-america-formiga-digital-1-e1657207179520.png" alt="foto" />
          </figure>
        </section>

        <section className="image">
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/agencia-de-marketing-digital-24-1-e1657207070321.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-vents-formiga-digital.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-diex-formiga-digital.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-logistique-formiga-digital-2-1.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-servis-formiga-digital-1.png" alt="foto" />
          </figure>
        </section>

        <section className="image">
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-golfe-riacho-grande.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-naturale-formiga-digital-removebg-preview.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-royal-cosmetics-formiga-digital.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-logistique-formiga-digital-2-1.png" alt="foto" />
          </figure>
          <figure className="images">
            <Image image="https://formiga.digital/wp-content/uploads/2022/11/logo-fid-formiga-digita.png" alt="foto" />
          </figure>
        </section>
      </section>
      <div className="btn-clients">
        <Button>Veja mais clients</Button>
      </div>
    </section>
  );
}

export default Clients;
