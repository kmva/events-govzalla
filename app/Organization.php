<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;


class Organization extends Model
{
    //
    protected $fillable = [
        'id',
        'name',
    ];

    public $timestamps = false;
}
