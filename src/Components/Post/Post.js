import React from 'react'

const Post = () => {
  return (
    <article className="c-post">
      <div className="post__thumb"><img src="../../assets/image.png" alt="Image" /></div>
      <div className="post_content">
        <h4>Titulo</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, tenetur.</p>
      </div>
    </article>
  )
}

export default Post