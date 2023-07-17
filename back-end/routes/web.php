<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

require __DIR__.'/auth.php';

Route::post('api/blogs', [App\Http\Controllers\BlogController::class, 'store']);

Route::get('api/blogs', [App\Http\Controllers\BlogController::class, 'index']);

Route::get('api/blogs/{blogId}', [App\Http\Controllers\BlogController::class, 'getBlogById']);

Route::patch('api/blogs/{blogId}/like', [App\Http\Controllers\BlogController::class, 'like']);

Route::get('api/blogs/user/{user_id}', [App\Http\Controllers\BlogController::class, 'getBlogsByUserId']);

Route::delete('api/blogs/{id}', [App\Http\Controllers\BlogController::class, 'destroy']);

Route::post('api/quiz/points', [App\Http\Controllers\ResultController::class, 'store']);

Route::get('api/results/{user_id}', [App\Http\Controllers\ResultController::class, 'index']);