import React, { useState, useEffect } from 'react';
import axios from "../api/axios";
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blogs');
      setBlogs(response.data.blogs);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setIsLoading(false);
    }
  };

  const handleLike = async (blogId) => {
    try {
      const response = await axios.patch(`/api/blogs/${blogId}/like`);
      if (response.status === 200) {
        fetchBlogs();
      }
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const highlightSearchTerm = (text) => {
    if (!searchQuery) {
      return text;
    }

    const regex = new RegExp(`(${searchQuery})`, 'gi');
    return text.replace(regex, '<span class="bg-yellow-200">$1</span>');
  };

  const filteredBlogs = blogs.filter(blog => {
    const title = blog.title.toLowerCase();
    const content = blog.content.toLowerCase();
    const author = blog.author.toLowerCase();
    return (
      title.includes(searchQuery.toLowerCase()) ||
      content.includes(searchQuery.toLowerCase()) ||
      author.includes(searchQuery.toLowerCase())
    );
  });

  const openBlogInNewTab = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  const sliceContent = (content) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = content;
    const paragraphs = tempElement.getElementsByTagName('p');

    if (paragraphs.length > 0) {
      const slicedContent = paragraphs[0].innerHTML;
      tempElement.remove();
      return slicedContent;
    }

    tempElement.remove();
    return content;
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Články</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blogs"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (filteredBlogs.map(blog => (
        <div key={blog.id} className="bg-white rounded shadow p-4 mb-4">
          <h3
            className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-500"
            dangerouslySetInnerHTML={{ __html: highlightSearchTerm(blog.title) }}
            onClick={() => openBlogInNewTab(blog.id)}
          ></h3>
          <p className="text-gray-500">Author: {blog.author}</p>
          <p
            className="mb-2"
            dangerouslySetInnerHTML={{ __html: highlightSearchTerm(sliceContent(blog.content)) }}
          ></p>
          <p
            className="text-blue-500 cursor-pointer"
            onClick={() => openBlogInNewTab(blog.id)}
          >
            Čítať ďalej
          </p>
          <p className="text-gray-500">Likes: {blog.likes}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => handleLike(blog.id)}
          >
            Like
          </button>
          <hr className="my-4" />
        </div>
      ))
    )}
    </div>
  );
};

export default Blogs;