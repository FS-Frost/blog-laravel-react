<?php

use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("posts")->group(function () {
    Route::get("", [PostController::class, "getPosts"]);
    Route::post("", [PostController::class, "createPost"]);

    Route::prefix("{postId}")->group(function () {
        Route::get("", [PostController::class, "getPost"]);
        Route::patch("", [PostController::class, "updatePost"]);
        Route::delete("", [PostController::class, "deletePost"]);
    });
});
