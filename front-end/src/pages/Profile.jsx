import React, { useState, useEffect } from 'react';
import axios from "../api/axios";
import useAuthContext from '../context/AuthContext';
import DataTable from 'datatables.net';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import LoginInfo from '../components/LoginInfo'
import { Navigate } from 'react-router-dom';
import JoditEditor from 'jodit-react';

const Profile = () => {
    const [title, setTitle] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [message, setMessage] = useState('');
    const { user, getUser } = useAuthContext();
    const [blogs, setBlogs] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!user) {
            getUser();
        } else {
            fetchUserBlogs();
            fetchUserResults();
        }
    }, [user]);

    const author = user?.name;
    const user_id = user?.id;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/blogs', {
                user_id,
                author,
                title,
                content: editorContent,
            });

            setMessage('Blog posted successfully');

            setTitle('');
            setEditorContent('');
            fetchUserBlogs();
        } catch (error) {
            setMessage('Error posting blog: ' + error.message);
        }
    };

    const handleDelete = async (blogId) => {
        try {
            const response = await axios.delete(`/api/blogs/${blogId}`);
            if (response.status === 200) {
                fetchUserBlogs();
                setMessage('Blog deleted successfully');
            }
        } catch (error) {
            setMessage('Error posting blog: ' + error.message);
        }
    };

    const fetchUserBlogs = async () => {
        try {
            const response = await axios.get(`/api/blogs?user_id=${user_id}`);
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error('Error fetching user blogs:', error);
        }
    };

    useEffect(() => {
        initializeDataTable();
    }, [blogs]);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);

        return `${day}.${month}.20${year}`;
    };

    const initializeDataTable = () => {
        const table = $('#blogsTable').DataTable();
        table.clear().draw();

        blogs.forEach((blog) => {
            const deleteButton = `<button class="bg-red-500 text-white px-4 py-2 rounded" data-id="${blog.id}">Vymazať</button>`;

            table.row.add([
                blog.title,
                blog.author,
                formatDate(blog.created_at),
                blog.likes,
                deleteButton,
            ]).draw();
        });

        $('#blogsTable tbody').off('click', 'button');

        $('#blogsTable tbody').on('click', 'button', function () {
            const blogId = $(this).data('id');
            handleDelete(blogId);
        });
    };

    const fetchUserResults = async () => {
        try {
            const response = await axios.get(`/api/results/${user_id}`);
            setResults(response.data.results);
        } catch (error) {
            console.error('Error fetching user results:', error);
        }
    };

    useEffect(() => {
        initializeDataTableResults();
    }, [results]);

    const initializeDataTableResults = () => {
        const table = $('#resultsTable').DataTable();

        table.clear().draw();

        results.forEach((result) => {

            table.row.add([
                result.lecture,
                result.points,
                result.max_points,
                formatDate(result.created_at),
            ]).draw();
        });
    };

    return (
        <div className="max-w-[80vw] mx-auto">
            <div className="max-width-7xl mx-auto my-6">
                {user && <LoginInfo user={user} />}
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">Profil</h2>

            {message && <p className="mb-4 text-green-600">{message}</p>}

            <h2 className="text-2xl font-bold mb-4">Napíš člákon na našu stránku.</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-1 font-medium">Nadpis:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block mb-1 font-medium">Text:</label>
                    <JoditEditor
                        value={editorContent}
                        onChange={setEditorContent}
                    />
                </div>

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Odoslať
                </button>
            </form>

            <h2 className='text-xl font-bold my-6'>Tvoje články</h2>

            <div className="overflow-x-auto">
                <table id="blogsTable" className="display">
                    <thead>
                        <tr>
                            <th>Nadpis</th>
                            <th>Autor</th>
                            <th>Dátum vydania</th>
                            <th>Likes</th>
                            <th>Vymazať</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>

            <h2 className='text-xl font-bold my-6'>Výsledky kvízov</h2>

            <div className="overflow-x-auto">
            <table id="resultsTable" className="display">
                <thead>
                    <tr>
                        <th>Názov lekcie</th>
                        <th>Získané body</th>
                        <th>Maximum</th>
                        <th>Odovzdané</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            </div>
            
        </div>
    );
};

export default Profile;