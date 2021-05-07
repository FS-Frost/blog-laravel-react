<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Post extends Authenticatable {
    protected $table = "post";

    protected $fillable = [
        "id",
        "user_id",
        "title",
        "content",
        "published_at",
        "created_at",
        "updated_at",
    ];
}
