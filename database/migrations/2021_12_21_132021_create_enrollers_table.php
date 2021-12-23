<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEnrollersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enrollers', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('event_id');
            $table->string('lastname');
            $table->string('firstname');
            $table->string('patronymic')->nullable();
            $table->string('email');
            $table->string('patronymic');
            $table->string('position')->nullable();
            $table->string('organization')->nullable();
            $table->string('area')->nullable();
            $table->date('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enrollers');
    }
}
