import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 2, title: 'php', body: ' yy php - is programming language' },
    { id: 3, title: 'rubi', body: 'aa rubi - is programming language' },
    { id: 1, title: 'JavaScript', body: 'pp JavaScript - is programming language' },
  ]);

  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    console.log('отработала функция сортед постс');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchPosts.length ? (
        <PostList remove={removePost} posts={sortedAndSearchPosts} title='Posts list about JS' />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Posts not found!</h1>
      )}
    </div>
  );
}

export default App;
