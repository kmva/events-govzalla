<?php

namespace App\Exports;

use App\Enroller;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;

class EnrollersExport implements FromQuery, WithHeadings
{
    use Exportable;

    public function query()
    {
        return DB::table('enrollers')
        ->join('events', 'enrollers.event_id', '=', 'events.id')
        ->select(
            'events.title', 'events.date',
            'lastname', 
            'firstname', 
            'patronymic', 
            'email', 
            'phone', 
            'position', 
            'enrollers.organization', 
            'area',
        )
        ->orderBy('event_id');
    }

    public function headings(): array
    {
        return [
            'Название мероприятия', 
            'Дата проведения', 
            'Фамилия', 
            'Имя', 
            'Отчество', 
            'Почта', 
            'Номер телефона', 
            'Должность', 
            'Организация', 
            'Район',
        ];
    }
}
