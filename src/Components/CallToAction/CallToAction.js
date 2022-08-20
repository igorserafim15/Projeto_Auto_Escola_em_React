import React from 'react'
import FilledButton from '../Buttons/FilledButton'

const CallToAction = ({ text, textButton, href }) => {
  return (
    <section className='c-call-to-action'>
      <div className="call-to-action__container container">
        <p className='paragraphy-lge'>{text}</p>
        <FilledButton
          text={textButton}
          href={href}
        />
      </div>
      <div className="cta__decoration item1"></div>
      <div className="cta__decoration item2"></div>
    </section>
  )
}

export default CallToAction