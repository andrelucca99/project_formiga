import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <footer className="section-footer">
      <section className="footer-infos">
        <section className="columuns">
          <figure>
            <img
              src="https://formiga.digital/wp-content/uploads/2022/11/LOGO-FORMIGA-DIGITAL-1-1536x401.png"
              alt="logo"
            />
          </figure>
          <ul>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
          </ul>
          <h3>APOIE</h3>
        </section>
        <section className="columuns">
          <h3>NOSSOS SERVIÇOS</h3>
          <ul>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
          </ul>
        </section>
        <section className="columuns">
          <h3>SOBRE A FORMIGA</h3>
          <ul>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
            <li>texte</li>
          </ul>
          <h3>NOS ACOMPANHE!</h3>
        </section>
        <section className="columuns">
          <h3>CEO DA AGÊNCIA</h3>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
