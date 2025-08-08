<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreAppointmentRequest;
use App\Repositories\Interfaces\AppointmentRepositoryInterface;


class AppointmentController extends Controller
{
    protected $appointmentRepository;

    public function __construct(AppointmentRepositoryInterface $appointmentRepository)
    {
        $this->appointmentRepository = $appointmentRepository;
    }
    public function store(StoreAppointmentRequest $request ){
        $appointment = $this->appointmentRepository->create($request->validated());

        return response()->json([
            'message' => 'Appointment scheduled successfully.',
            'data'    => $appointment
        ], 201);
    }
}
