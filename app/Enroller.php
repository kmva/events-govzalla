<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;


class Enroller extends Model
{
    //
    protected $fillable = [
        'event_id',
        'lastname', 
        'firstname', 
        'patronymic', 
        'email', 
        'phone', 
        'position', 
        'organization', 
        'area', 
        'created_at'
    ];

    public $timestamps = false;
}
