import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchById, isLoading] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading] = useFetching(async () => {
    const response = await PostService.getCommentbyId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div className='App'>
      <h1 className='title'>Post page number - {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h4>
            {post.id}. {post.title}
          </h4>
          <h5>{post.body}</h5>
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map(comm => (
            <div key={comm.id} style={{ marginTop: 15 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
