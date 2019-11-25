import * as React from 'react'

const Certification = () => (
  <section className="common-section" id="process">
    <div className="container">
      <header className="common-section__header">
        <h2>Certifications and Prizes</h2>
        <h4></h4>
      </header>
      <div className="grid-container">
        <ul className="process">
          <li className="process__step process__step_research">
            <div className="process__step-icon icon icon_cert is-active"></div>
          </li>
          <li className="process__step-info process__step-info_research is-active">
            <h3>
              <spana>1</spana>
              &mdash;Bachelor of Science
            </h3>
            <p>
              Graduating from HCM University of Science, Advanced Program in
              Computer Science.
            </p>
          </li>
          <li className="process__step process__step_develop">
            <div className="process__step-icon icon icon_cert"></div>
          </li>
          <li className="process__step-info process__step-info_develop">
            <h3>
              <spana>2</spana>
              &mdash;Communicative Certification: TOEFL ibt 85 pts
            </h3>
            <p>
              The TOEFL iBT® test measures your ability to use and understand
              English at the university level. And it evaluates how well you
              combine your reading, listening, speaking and writing skills to
              perform academic tasks.
            </p>
          </li>
          <li className="process__step process__step_deploy">
            <div className="process__step-icon icon icon_prize"></div>
          </li>
          <li className="process__step-info process__step-info_deploy">
            <h3>
              <spana>3</spana>
              &mdash;Second place
            </h3>
            <p>
              Got second prize for the competitive algorithm contest of the
              university
            </p>
          </li>
          <li className="process__step process__step_deliver">
            <div className="process__step-icon icon icon_prize"></div>
          </li>
          <li className="process__step-info process__step-info_deliver">
            <h3>
              <spana>4</spana>
              &mdash;First place
            </h3>
            <p>
              Highschool, got First prize for the competitive algorithm contest
              of the city.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Certification
