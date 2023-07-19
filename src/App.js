import React from "react";
import Post from "./components/Post";
import AddPostForm from "./components/AddPostForm";
import MyInput from './components/UI/input/MyInput'
import Button from './components/UI/button/Button'
import PostForm from "./components/PostForm";
import { useState } from "react";
import "./styles/App.css"
function App() {
  const [posts, setPosts] = useState(
    [
      {id:1, title:"Javascript", description:"Some description"},
      {id:2, title:"Javascript", description:"Some description"},
      {id:3, title:"Javascript", description:"Some description"},
    ]
  )
  const createPost = (post) => {
    setPosts([...posts,{...post, id:Date.now()}])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id != post.id))
  }

  return (
  <div style={{textAlign:"center"}}>
    <PostForm create={createPost}></PostForm>
    <Post remove={removePost} title="New post list" posts={posts}></Post>
  </div>
  );
}

export default App;
