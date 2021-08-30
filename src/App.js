import React, { useMemo, useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
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
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('отработала функция сортед постс');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={'share...'}
      />

      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='sort by'
        options={[
          { value: 'title', name: 'name' },
          { value: 'body', name: 'descr' },
        ]}
      />

      {sortedAndSearchPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchPosts} title='Posts list about JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found!</h1>
      )}
    </div>
  );
}

export default App;
