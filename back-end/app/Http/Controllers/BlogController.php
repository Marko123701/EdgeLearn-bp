<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'author' => 'required|string',
            'title' => 'required|string',
            'content' => 'required|string',
        ]);

        $blog = Blog::create($validatedData);

        return response()->json(['message' => 'Blog created successfully', 'blog' => $blog], 201);
    }

    public function index()
{
    $blogs = Blog::all();

    return response()->json([
        'blogs' => $blogs
    ]);
}

 public function like($blogId)
    {
        try {
            $blog = Blog::findOrFail($blogId);
            $blog->increment('likes');
            return response()->json(['message' => 'Blog liked successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error liking blog', 'error' => $e->getMessage()], 500);
        }
    }

    public function getBlogById($blogId)
{
    try {
        $blog = Blog::findOrFail($blogId);
        return response()->json(['blog' => $blog]);
    } catch (\Exception $e) {
        return response()->json(['message' => 'Error retrieving blog', 'error' => $e->getMessage()], 500);
    }
}

    public function getBlogsByUserId($user_id)
{
    $blogs = Blog::where('user_id', $user_id)->get();

    return response()->json(['blogs' => $blogs]);
}

public function destroy($id)
{
    $blog = Blog::findOrFail($id);
    $blog->delete();

    return response()->json(['message' => 'Blog deleted successfully']);
}
}