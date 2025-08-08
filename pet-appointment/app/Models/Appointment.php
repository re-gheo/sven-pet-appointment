<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
    'name',
    'email',
    'phone',
    'pet_name',
    'pet_type',
    'start_date',
    'notes'
    ];
}
