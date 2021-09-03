import React from 'react';
import { useHistory } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = props => {
  const router = useHistory();
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className='post__btns'>
        <div className='openBtn'>
          <MyButton onClick={() => router.push(`/post/${props.post.id}`)}>Open</MyButton>
        </div>
        <MyButton onClick={() => props.remove(props.post)}>Delite</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
