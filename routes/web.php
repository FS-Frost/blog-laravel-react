<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get("/", [HomeController::class, "welcome"]);
Route::get("home", [HomeController::class, "index"]);
Route::get("counter", [HomeController::class, "counter"]);
