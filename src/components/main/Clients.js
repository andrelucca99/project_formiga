import React from 'react';
import Image from '../utils/Image';
import Button from '../utils/Button';
import './styles/clients.css';
import Titlte from '../utils/Titlte';
import { clients } from '../utils/mocks/Clients';

function Clients() {
  return (
    <section className="section-clients">
      <Titlte>
        <p>ALGUM DOS NOSSOS</p>
        <h2>CLIENTES</h2>
      </Titlte>
      <section className="image-clients">
        <section className="image">
          {clients.map((item) => (
            <figure className="images" key={ item }>
              <Image image={ item.image } alt={ item.alt } />
            </figure>
          ))}
        </section>
        <div className="btn-clients">
          <Button>Veja mais clients</Button>
        </div>
      </section>
    </section>
  );
}

export default Clients;
