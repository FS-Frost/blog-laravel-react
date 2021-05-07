<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get("/", [HomeController::class, "index"]);
Route::get("home", [HomeController::class, "index"]);
Route::get("counter", [HomeController::class, "counter"]);
Route::get("posts", [HomeController::class, "posts"]);
