<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller {
    public static function index(): Response {
        return Inertia::render("Home");
    }

    public static function welcome(): Renderable {
        return view("welcome");
    }

    public static function counter(Request $request): Response {
        $validator = Validator::make($request->only("initialCount"), [
            "initialCount" => ["required", "integer"]
        ]);

        if ($validator->fails()) {
            abort(400, $validator->errors());
        }

        $validatedData = $validator->validated();

        return Inertia::render("Counter", $validatedData);
    }
}
