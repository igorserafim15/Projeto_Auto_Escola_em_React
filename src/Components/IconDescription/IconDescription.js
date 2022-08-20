import React from 'react'

const IconDescription = ({icon, title, description}) => {
  return (
    <figure className='c-icon-description'>
      {icon}
      <figcaption>
        <h4>{title}</h4>
        <p className='paragraphy-sml'>{description}</p>
      </figcaption>
    </figure>
  )
}

export default IconDescription