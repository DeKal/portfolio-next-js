import * as React from 'react'

const Project = () => (
  <section className="common-section" id="projects">
    <header className="common-section__header">
      <h2>Projects</h2>
      <p></p>
    </header>
    <div className="projects-wrap">
      <div className="grid-container">
        <div className="projects">
          <figure className="projects__item">
            <script
              type="text/javascript"
              src="https://ajax.cloudflare.com/cdn-cgi/scripts/04b3eb47/cloudflare-static/mirage2.min.js"
            ></script>
            <img
              data-cfsrc="static/images/projects/brand360.jpg"
              alt="Brand 360"
              // style="display:none;visibility:hidden;"
            />
            <noscript>
              <img src="static/images/projects/brand360.jpg" alt="Brand 360" />
            </noscript>
            <figcaption>
              <a
                className="icon icon_link"
                href="http://brand360.vn/"
                rel="nofollow"
              >
                Brand360 project
              </a>
            </figcaption>
          </figure>
          <figure className="projects__item">
            <img
              data-cfsrc="static/images/projects/anco.jpg"
              alt="Report application for Masan"
              // style="display:none;visibility:hidden;"
            />
            <noscript>
              <img
                src="static/images/projects/anco.jpg"
                alt="Report application for Masan"
              />
            </noscript>
            <figcaption>
              <a className="icon icon_link" rel="nofollow">
                Report application for Masan
              </a>
            </figcaption>
          </figure>
          <figure className="projects__item">
            <img
              data-cfsrc="static/images/projects/taman.jpg"
              alt="Tam An Web"
              // style="display:none;visibility:hidden;"
            />
            <noscript>
              <img src="static/images/projects/taman.jpg" alt="Tam An Web" />
            </noscript>
            <figcaption>
              <a
                className="icon icon_link"
                href="https://github.com/DeKal/Tam-An-Food-Store-Manager"
                rel="nofollow"
              >
                Tam An Food Store Manager
              </a>
            </figcaption>
          </figure>
          <figure className="projects__item">
            <img
              data-cfsrc="static/images/projects/2048.jpg"
              alt="2048"
              // style="display:none;visibility:hidden;"
            />
            <noscript>
              <img src="static/images/projects/2048.jpg" alt="2048" />
            </noscript>
            <figcaption>
              <a
                className="icon icon_link"
                href="https://github.com/DeKal/2048"
                rel="nofollow"
              >
                2048 Fun Games
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
)

export default Project
