<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Event;
use Illuminate\Support\Facades\DB;

class EventsController extends Controller
{
    /***
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('events')
        ->join('organizations', 'organization_id', '=', 'organizations.id')
        ->select(
            'events.id',
            'title', 
            'format', 
            'description', 
            'organizations.id as organization_id',
            'organizations.name as organization_name',
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
        )
        ->orderBy('organization_id')
        ->orderBy('date')
        ->get();
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
            'title' => 'bail|required',
            'format' => 'required',
            'description' => 'required',
            'organization_id' => 'required',
            'date' => 'required',
            'location' => 'required',
            'speakers' => 'required',
        ]);

        if($request->file('img')){
            $folder = $request->date;
            $name = $request->file('img')->getClientOriginalName();

            $path = $request->img->storeAs("images/{$folder}", $name);
            $picture_url = "/uploads/$path";
        } else {
            $path = "/img/event_bg.jpg";
            $picture_url = $path;
        }

        $event = Event::create([
            'title' => $request->title,
            'format' => $request->format,
            'description' => $request->description,
            'organization_id' => $request->organization_id,
            'subdivision' => $request->subdivision,
            'direction' => $request->direction,
            'date' => $request->date,
            'location' => $request->location,
            'speakers' => $request->speakers,
            'target_audience' => $request->target_audience,
            'participants_number' => $request->participants_number,
            'picture_url' => $picture_url,
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
        return Event::find($id);
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
        $request->validate([
            'title' => 'bail|required',
            'format' => 'required',
            'description' => 'required',
            'organization_id' => 'required',
            'date' => 'required',
            'location' => 'required',
            'speakers' => 'required',
        ]);

        if($request->file('img')){
            $folder = $request->date;
            $name = $request->file('img')->getClientOriginalName();

            $path = $request->img->storeAs("images/{$folder}", $name);
            $picture_url = "/uploads/$path";
        } else {
            $picture_url = Event::where('id', $id)->value('picture_url');
        }

        Event::where('id', $id)->update([
            'title' => $request->title,
            'format' => $request->format,
            'description' => $request->description,
            'organization_id' => $request->organization_id,
            'subdivision' => $request->subdivision,
            'direction' => $request->direction,
            'date' => $request->date,
            'location' => $request->location,
            'speakers' => $request->speakers,
            'target_audience' => $request->target_audience,
            'participants_number' => $request->participants_number,
            'picture_url' => $picture_url,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function remove(Request $request, $id)
    {
        Event::where('id', $id)->update([
            'removed' => $request->removed
        ]);
    }

    
     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function close(Request $request, $id)
    {
        Event::where('id', $id)->update([
            'enrollment_disabled' => $request->enrollment_disabled
        ]);
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Event::where('id', $id)->delete();
    }
}
