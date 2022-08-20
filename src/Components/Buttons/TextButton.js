import React from 'react'

const TextButton = ({ text, href }) => {
  return (
    <a className='c-text-button' href={href}>{text}</a>
  )
}

export default TextButton