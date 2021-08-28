import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - is programming language' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript - is programming language' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript - is programming language' },
  ]);

  const [title, setTitle] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className='App'>
      <from>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='post title'
        />
        <MyInput type='text' placeholder='post description' />
        <MyButton onClick={addNewPost}>add post</MyButton>
      </from>
      <PostList posts={posts} title='Posts list about JS' />
    </div>
  );
}

export default App;
