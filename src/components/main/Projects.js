import React from 'react';
import Image from '../utils/Image';
import TitlteLeft from '../utils/TitlteLeft';
import './styles/projects.css';
import { project } from '../utils/mocks/Projects';

function Projects() {
  return (
    <section className="projects">
      <TitlteLeft>
        <p>NOSSOS</p>
        <h2>PROJETOS</h2>
      </TitlteLeft>

      <section className="images-projects">
        {project.map((item) => (
          <figure className="image-project" key={ item }>
            <Image image={ item.image } alt={ item.alt } />
          </figure>
        ))}
      </section>

      {/* <section className="images-projects">
        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/3d2893156050437.Y3JvcCw4MTAsNjMzLDAsMA-1.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/22d6cd155954351.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/8f5526155954293.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>
      </section>

      <section className="images-projects">
        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/9b6034155954241.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/183c94155953933.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/727203155786001.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>
      </section>

      <section className="images-projects">
        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/120e18155785485.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/daae86155036893.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/475cac155036815.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>
      </section>

      <section className="images-projects">
        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/d42333155036721.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/559b61155036639.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/d56082155036529.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>
      </section>

      <section className="images-projects">
        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/020a39155036465.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/205c98156372419.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>

        <figure className="image-project">
          <Image image="https://formiga.digital/wp-content/uploads/2022/11/3f3990156372405.Y3JvcCw4MTAsNjMzLDAsMA.png" alt="foto" />
        </figure>
      </section> */}
    </section>
  );
}

export default Projects;
