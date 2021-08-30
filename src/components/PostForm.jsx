import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = e => {
    e.preventDefault();
    const newPosts = {
      ...post,
      id: Date.now(),
    };
    create(newPosts);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      {/* управляемый компонент */}
      <MyInput
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
        type='text'
        placeholder='Post title'
      />
      <MyInput
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type='text'
        placeholder='Post description'
      />
      <MyButton onClick={addNewPost}>Add</MyButton>
    </form>
  );
};

export default PostForm;
