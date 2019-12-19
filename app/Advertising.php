<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Advertising extends Model
{
    protected $fillable = [
        'title', 'description', 'images', 'user_id', 'address', 'price', 'type', 'category_id', 'like_count', 'shared_count'
    ];

    protected $casts = [
        'images' => 'array'
    ];

    public function Category()
    {
        return $this->belongsTo('App\Category');
    }

    public function User()
    {
        return $this->belongsTo('App\User');
    }
}
