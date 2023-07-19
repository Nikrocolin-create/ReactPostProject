import React from 'react'
import PostItem from './PostItem'

function Post({posts,title,remove}) {
  return (
    <div className="Post">
        <h3>{title}</h3>
        {posts.length == 0 && <h1>Posts are not found</h1>}
    {
      posts.map((post, index)=>{
        return <PostItem remove={remove} post={post} index={index+1} key={post.id}></PostItem>
      })
    }
  </div>
  )
}

export default Post