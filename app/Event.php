<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    //
    protected $fillable = [
        'title', 
        'format', 
        'description', 
        'organization_id', 
        'subdivision', 
        'direction', 
        'date', 
        'location', 
        'speakers', 
        'target_audience', 
        'participants_number', 
        'picture_url',
        'enrollment_disabled',
        'removed',
    ];
}
