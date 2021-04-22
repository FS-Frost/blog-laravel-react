<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

Route::get('home', function () {
    return Inertia::render('Home');
});

Route::get('counter', function (Request $request) {
    $validator = Validator::make($request->only("initialCount"), [
        "initialCount" => ["required", "integer"]
    ]);

    if ($validator->fails()) {
        abort(400, $validator->errors());
    }

    $validatedData = $validator->validated();

    return Inertia::render('Counter', $validatedData);
});

Route::get('/', function () {
    return view('welcome');
});
