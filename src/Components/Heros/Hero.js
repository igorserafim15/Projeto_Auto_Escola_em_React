import React from 'react'
import ContentSide from '../ContentSide/ContentSide'

const Hero = ({ title, description, other }) => {
  return (
    <section className='c-hero'>
      <div className="hero__decoration item1"></div>
      <div className="hero__decoration item2"></div>
      <div className="hero__container container">
        <ContentSide>
          <h2>{title}</h2>
          <p className='paragraphy-lge'>{description}</p>
          {other}
        </ContentSide>
      </div>
    </section>
  )
}

export default Hero