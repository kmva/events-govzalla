<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enroller;
use App\Exports\EnrollersExport;
use Maatwebsite\Excel\Facades\Excel;

class EnrollersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Enroller::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'event_id' => 'bail|required',
            'lastname' => 'required',
            'firstname' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'position' => 'required',
            'organization' => 'required',
            'area' => 'required',
        ]);

        $event = Enroller::create([
            'event_id' => $request->event_id,
            'lastname' => $request->lastname,
            'firstname' => $request->firstname,
            'patronymic' => $request->patronymic,
            'email' => $request->email,
            'phone' => $request->phone,
            'position' => $request->position,
            'organization' => $request->organization,
            'area' => $request->area,
            'created_at' => date('Y-m-d H:i:s', strtotime($request->created_at))
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Export enrollers with excel table format.
     *
     * @return \Illuminate\Http\Response
     */
    public function export()
    {
       /*  return Excel::download(new EnrollersExport, 'enrollers.xlsx'); */
        return (new EnrollersExport)->download('enrollers.xlsx');
    }

}
