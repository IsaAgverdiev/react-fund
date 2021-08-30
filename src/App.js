import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/input/select/MySelect';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 2, title: 'php', body: ' yy php - is programming language' },
    { id: 3, title: 'rubi', body: 'aa rubi - is programming language' },
    { id: 1, title: 'JavaScript', body: 'pp JavaScript - is programming language' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='sort by'
        options={[
          { value: 'title', name: 'name' },
          { value: 'body', name: 'descr' },
        ]}
      />

      {posts.length ? (
        <PostList remove={removePost} posts={posts} title='Posts list about JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found!</h1>
      )}
    </div>
  );
}

export default App;
