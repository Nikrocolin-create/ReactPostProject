import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function Post({posts,title,remove}) {
  return (

    <div className="Post">
        <h3>{title}</h3>
        {posts.length == 0 && <h1>Posts are not found</h1>}
        <TransitionGroup>{
        posts.map((post, index)=>{
          return <CSSTransition
            key={post.id}
            timeout = {500}
            classNames="post"
          ><PostItem remove={remove} post={post} index={index+1}></PostItem></CSSTransition>
        })}</TransitionGroup>
  </div>
  )
}

export default Post