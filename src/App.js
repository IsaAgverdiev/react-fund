import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - is programming language' },
    { id: 2, title: 'JavaScript 2', body: 'JavaScript - is programming language' },
    { id: 3, title: 'JavaScript 3', body: 'JavaScript - is programming language' },
  ]);
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Pyton', body: 'Pyton - is programming language' },
    { id: 2, title: 'Pyton 2', body: 'Pyton - is programming language' },
    { id: 3, title: 'Pyton 3', body: 'Pyton - is programming language' },
  ]);

  return (
    <div className='App'>
      <PostList posts={posts} title='Posts list about JS' />
      <PostList posts={posts2} title='Posts list about Pyton' />
    </div>
  );
}

export default App;
