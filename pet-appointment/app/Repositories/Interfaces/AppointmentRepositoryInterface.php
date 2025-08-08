<?php

namespace App\Repositories\Interfaces;

use App\Models\Appointment;

interface AppointmentRepositoryInterface
{
    public function create(array $data): Appointment;
}