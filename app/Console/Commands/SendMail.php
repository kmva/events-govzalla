<?php

namespace App\Console\Commands;

use DB;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use Mail;

class sendMail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notification:sendmail';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send email notification about tomorrow events to enrollers';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $date = Carbon::tomorrow()->toDateString();
        $events = DB::table('events')->where('date', $date)->get();
        if(isset($events)) {
            foreach($events as $event) {
                $enrollers = DB::table('enrollers')->where('event_id', $event->id)->get();  
                if(isset($enrollers)){
                    foreach($enrollers as $enroller){
                        Log::alert($enroller->email);
                        Mail::send(['html' => 'mail'], ['enroller' => $enroller, 'event' => $event], function($message) use ($enroller) {
                            $message->to("$enroller->email", 'To enroller')->subject('Вы отправляли заявку на мероприятие');
                            $message->from('cnppmpr.chr@gmail.com', 'ЦНППМ ЧР');
                        });
                    }
                }
            }
        }
    }
}