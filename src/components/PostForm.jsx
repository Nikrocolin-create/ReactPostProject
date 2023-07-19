import React from 'react'
import MyInput from './UI/input/MyInput'
import Button from './UI/button/Button'
import { useState } from 'react'
function PostForm({create}) {
    const [post, setPost] = useState({title:'',description:''})
    function addPost (e) {
        e.preventDefault();
        create(post);
    }
  return (
    <form>
        <MyInput type="text" value={post.title} onChange={(e)=>setPost({...post, title:e.target.value})} placeholder="Insert title"/>
        <MyInput type="text" value={post.description} onChange={(e)=>setPost({...post, description:e.target.value})} placeholder="Insert description"/>
        <Button onClick={addPost}>Add post</Button>
  </form>
  )
}

export default PostForm