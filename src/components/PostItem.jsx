import React from 'react'
import Button from './UI/button/Button'
function PostItem({post, index, remove}) {
  return (
    <div className="post">
    <div className="post__content">
      <strong>{index}.{post.title}</strong>
      <div>
         {post.description}
      </div>
    </div>
    <div className="post__btns">
      <Button onClick={()=>{console.log(post.id);remove(post)}}>Delete</Button>
    </div>
  </div>
  )
}

export default PostItem