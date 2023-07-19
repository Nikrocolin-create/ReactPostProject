import React from 'react'
import MyInput from './UI/input/MyInput'
import Button from './UI/button/Button'

function AddPostForm() {
  return (
    <>
    <form>
        <MyInput placeholder="Insert name"></MyInput>
        <MyInput placeholder="Insert description"></MyInput>
        <Button>Add post</Button>
    </form>
    </>
  )
}

export default AddPostForm