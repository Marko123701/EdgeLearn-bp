import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "../api/axios";

const BlogPost = ({ match }) => {
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    fetchBlogPost();
  }, [blogId]);

  const fetchBlogPost = async () => {
    try {
      const response = await axios.get(`/api/blogs/${blogId}`);
      setBlogPost(response.data.blog);
    } catch (error) {
      console.error('Error fetching blog post:', error);
    }
  };

  if (!blogPost) {
    return <div className='text-center'>Loading...</div>;
  }

  return (
    <div className="rounded-lg p-4">
      <h2 className="text-center text-2xl font-bold">{blogPost.title}</h2>
      <br />
      <div className='mx-[10%]'>
        <p className="text-gray-600">Author: {blogPost.author}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        <br />
        <p className="text-gray-600">Likes: {blogPost.likes}</p>
      </div>
    </div>
  );
};

export default BlogPost;