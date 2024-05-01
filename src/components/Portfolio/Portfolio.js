import React from 'react';
import './Portfolio.css';
import data from '../../projects.json';

function Portfolio() {
  return (
    <>
      <div className="heading">Portfolio</div>
      <div className="card-container">
        {data.projects.map((project) => (
          <div class="card" key={project.id}>
            <img src={project.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{project.name}</h5>
              <p class="card-text pb-2">{project.description}</p>
              <a className="btn btn-primary linkBtn" rel='noreferrer' target="_blank" href={project.url}>
                Link
              </a>
              {/* <button class="btn btn-primary">Go somewhere</button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
