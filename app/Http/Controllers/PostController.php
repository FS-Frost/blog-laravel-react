<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller {
    public static function getPosts(): JsonResponse {
        $posts = Post::all();

        return response()->json([
            "posts" => $posts,
        ]);
    }

    public static function getPost(int $postId): JsonResponse {
        $post = Post::findOrFail($postId);

        return response()->json([
            "post" => $post,
        ]);
    }

    public function createPost(CreatePostRequest $request): JsonResponse {
        $validatedData = $request->validated();
        $userId = 1;
        $finalData = array_merge($validatedData, [
            "user_id" => $userId,
        ]);
        Post::create($finalData);
        return response()->json([], 204);
    }

    public function updatePost(UpdatePostRequest $request, int $postId): JsonResponse {
        $validatedData = $request->validated();
        $post = Post::findOrFail($postId);
        $post->update($validatedData);
        return response()->json([], 204);
    }
}
