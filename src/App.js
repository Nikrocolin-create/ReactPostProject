import React, { useMemo } from "react";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { useState } from "react";
import "./styles/App.css"
import SortSelector from "./components/SortSelector";
import PostFilter from "./components/PostFilter";
import Button from "./components/UI/button/Button"
import MyModal from "./components/UI/modal/MyModal";
function App() {
  const [posts, setPosts] = useState(
    [
      {id:1, title:"aa", description:"cc"},
      {id:2, title:"bb", description:"bb"},
      {id:3, title:"cc", description:"aa"},
    ]
  )
  const [searchQuery, setSearchQuery] = useState('');
  const options = [{'value':'title','text':'sort by title'},{'value':'description','text':'sort by description'}]
  const [filter, setFilter] = useState({query:'',sort:''})
  const [activeModal, setActiveModal] = useState(true);
  const createPost = (post) => {
    setPosts([...posts,{...post, id:Date.now()}])
    setActiveModal(false);
  }
  const [selectedSort, setSelectedSort] = useState('')

  const sortedPosts = useMemo(()=>{
    console.log("Get sorted function")
    if (filter.sort) {
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [filter.sort,posts]) 

  const searchedPosts = useMemo(()=>{
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query)||post.description.toLowerCase().includes(filter.query))
  },[sortedPosts,filter.query])

  const removePost = (post) => {
    setPosts(posts.filter(p=>p.id != post.id))
  }

  return (
  <div style={{textAlign:"center"}}>
    <Button onClick={()=>{setActiveModal(true)}}>Add post</Button>
    <MyModal active={activeModal} setActive={setActiveModal}>
      <PostForm create={createPost}></PostForm>
    </MyModal>
    
    <hr style={{"margin":"15px"}}/>
    <PostFilter optionsToFilter={options} filter={filter} setFilter={setFilter}/>
    <hr style={{"margin":"15px"}}/>
    <Post remove={removePost} title="New post list" posts={searchedPosts}></Post>
  </div>
  );
}

export default App;
