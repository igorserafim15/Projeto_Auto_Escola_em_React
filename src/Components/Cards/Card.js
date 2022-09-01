import React from 'react'

const Card = ({icon, title, description, textButton, href }) => {
  return (
    <figure className='c-card'>
      {icon}
      <figcaption>
        <h4>{title}</h4>
        <p className='paragraphy-sml'>{description}</p>
        <a href={href}>{textButton}</a>
      </figcaption>
      <div className="card__decoration"></div>
    </figure>
  )
}

export default Card