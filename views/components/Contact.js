import * as React from 'react'

const Contact = () => (
  <div className="contacts-section" id="contacts">
    <div className="container">
      <section className="contact-card">
        <header className="contact-card__header">
          <h2>Contact information</h2>
          <h4>My pleasure to meet you!!</h4>
        </header>
        <div className="contact-info">
          <div className="contact-info__logo">JD</div>
          <div className="contact-info__group">
            <div className="contact-info__additional">
              <p>Do you need a professional for lending a hand?</p>
              <p>Are you facing unfathomable problem?</p>
            </div>
            <div className="contact-info__vcard vcard">
              <h4 className="fn org">Phat Ho</h4>
              <p className="role title">Fullstack Developer</p>
              <p className="icon icon_location">
                <a className="adr js-anchor" href="#gmap">
                  <span className="country-name">VietNam</span>
                  ,&nbsp;
                  <span className="locality">Dist 1, Ho Chi Minh City</span>
                </a>
              </p>
              <p className="icon icon_mail">
                <a className="email" href="#contact">
                  hohuuphat22@gmail.com
                </a>
              </p>
              <p className="icon icon_phone">
                <a className="email" href="#contact">
                  +84 906323761
                </a>
              </p>
            </div>
            <ul className="contact-info__social">
              <li>
                <a
                  className="icon icon_fb"
                  rel="nofollow"
                  href="https://www.facebook.com/dekal.dev"
                >
                  I&apos;m on Facebook
                </a>
              </li>
              <li>
                <a
                  className="icon icon_in"
                  rel="nofollow"
                  href="https://www.linkedin.com/in/huu-phat-ho-1170b09b/"
                >
                  My Linkedin profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <div className="gmap" id="gmap"></div>
  </div>
)

export default Contact
