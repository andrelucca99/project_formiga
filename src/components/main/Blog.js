import React from 'react';
import Image from '../utils/Image';
import TitlteLeft from '../utils/TitlteLeft';
import './styles/blog.css';
import { blog } from '../utils/mocks/Blog';

function Blog() {
  return (
    <section className="blog">
      <TitlteLeft>
        <p>CONFIRA O</p>
        <h2>NOSSO BLOG</h2>
      </TitlteLeft>

      <section className="images-blog">
        {blog.map((item) => (
          <figure className="image-blog" key={ item }>
            <Image image={ item.image } alt={ item.alt } />
            <figcaption>
              <h3>{ item.title }</h3>
              <p>{ item.paragrafh }</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
}

export default Blog;
