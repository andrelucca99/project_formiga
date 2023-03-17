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
    </section>
  );
}

export default Projects;
