<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Result;

class ResultController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'lecture' => 'required|string',
            'points' => 'required|integer',
            'max_points' => 'required|integer',
        ]);

        $blog = Result::create($validatedData);

        return response()->json(['message' => 'Result created successfully', 'blog' => $blog], 201);
    }

    public function index($user_id)
    {
        $results = Result::where('user_id', $user_id)->get();
        return response()->json(['results' => $results]);
    }
}
