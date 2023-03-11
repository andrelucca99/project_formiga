import React from 'react';
import Clients from './Clients';
import Projects from './Projects';
import Specialist from './Specialist';
import "./styles/main.css";

function Main() {
  return (
    <main>
        <section className="title-services">
            <p>AGÊNCIA DE MARKETING DIGITAL</p>
            <h2>CONHEÇA OS SERVIÇOS OFERECIDOS PELO FORMIGUEIRO</h2>
        </section>
        <section className="image-services">
            <img src="https://formiga.digital/wp-content/uploads/2022/11/formigueiro-sem-fundo-1-1536x542.png" alt="foto" />
        </section>
        <section className="section-client">
          <Clients />
        </section>
        <section className="section-projects">
          <Projects />
        </section>

        <section className="section-specialist">
          <Specialist />
        </section>
    </main>
  );
}

export default Main;
