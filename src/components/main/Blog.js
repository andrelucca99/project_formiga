import React from 'react';
import './styles/blog.css';

function Blog() {
  return (
    <section className="blog">
      <section className="title-blog">
        <p>CONFIRA O</p>
        <h2>NOSSO BLOG</h2>
      </section>

      <section className="images-blog">
        <figure className="image-blog">
          <img
            src="https://formiga.digital/wp-content/uploads/2023/02/Dicas-para-melhorar-a-presenca_-1.jpg"
            alt="foto"
          />
          <figcaption>
            <h3>Dicas para melhorar a presença digital de uma empresa</h3>
            <p>
              Aqui estão algumas dicas: Definir objetivos claros: Antes de
              começar a investir em marketing digital, é importante definir
              objetivos claros e mensuráveis para sua presença
            </p>
          </figcaption>
        </figure>

        <figure className="image-blog">
          <img
            src="https://formiga.digital/wp-content/uploads/2023/02/como-medir-o-sucesso_-1.jpg"
            alt="foto"
          />
          <figcaption>
            <h3>Como medir o sucesso de uma campanha de marketing digital?</h3>
            <p>
              Medir o sucesso de uma campanha de marketing digital é importante
              para avaliar o retorno do investimento e ajustar a estratégia de
              marketing, se necessário.
            </p>
          </figcaption>
        </figure>

        <figure className="image-blog">
          <img
            src="https://formiga.digital/wp-content/uploads/2023/02/O-impacto-das-midias-sociais_.jpg"
            alt="foto"
          />
          <figcaption>
            <h3>
              O impacto das mídias sociais na estratégia de marketing de uma
              empresa.
            </h3>
            <p>
              As mídias sociais têm um impacto significativo na estratégia de
              marketing de uma empresa. Aqui estão algumas maneiras pelas quais
              as mídias sociais podem afetar
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="images-blog">
        <figure className="image-blog">
          <img
            src="https://formiga.digital/wp-content/uploads/2023/02/Tendencias-do-Mkt.jpg"
            alt="foto"
          />
          <figcaption>
            <h3>Tendências do Marketing Digital</h3>
            <p>
              Existem várias tendências atuais no marketing digital, mas aqui
              estão algumas das principais: Conteúdo personalizado: Com o grande
              volume de informações disponíveis na internet, as
            </p>
          </figcaption>
        </figure>

        <figure className="image-blog">
          <img
            src="https://formiga.digital/wp-content/uploads/2023/02/5-Social-Selling.jpg"
            alt="foto"
          />
          <figcaption>
            <h3>Social Selling: a estratégia de vendas nas redes sociais</h3>
            <p>
              O Social Selling é uma estratégia de vendas que utiliza as redes
              sociais para se relacionar com potenciais clientes, gerar leads e
              fechar negócios. É
            </p>
          </figcaption>
        </figure>

        <figure className="image-blog">
          <img
            src="https://formiga.digital/wp-content/uploads/2023/02/4-formigas.jpg"
            alt="foto"
          />
          <figcaption>
            <h3>O que podemos aprender com as formigas?</h3>
            <p>
              As formigas são insetos fascinantes que vivem em colônias
              altamente organizadas e trabalham juntas para sobreviver e
              prosperar. Há muitas lições que podemos aprender com
            </p>
          </figcaption>
        </figure>
      </section>
    </section>
  );
}

export default Blog;
