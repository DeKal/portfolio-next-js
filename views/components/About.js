import * as React from 'react'

const About = () => (
  <section className="about-section" id="about">
    <div className="container">
      <div className="about-card">
        <header className="about-card__header">
          <h2>About me</h2>
          <h5>Well skip it if you&apos;re bored!!</h5>
        </header>
        <div className="about-card__info">
          <p>
            Exposing to problem solving at a very young age, I passionate with
            disentangling sticky situations that can be occured in software
            engineer as well as real life. My little hobby is to find solution
            for competitive problems using optimized algorithm. I also have
            great interest in software architecture, and always seek to learn
            new things. Down to earth, I am human. I do find it interested to go
            cycling, jogging, reading books, listen to music, and stuffs that a
            normal human being would love to do.
          </p>
          <blockquote>
            <p>Where there&apos;s a will, there&apos;s a way</p>
          </blockquote>
          <p>
            I have the believe that all the problems in the world will be solved
            as long as you keep the positive mental attitude and a cold head.
          </p>
          <p className="about-card__info-status">
            <span>Current status:</span>
            Available for Freelance job
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About
