<?php

use Illuminate\Http\Request;
use Api\EventsController;
use Api\EnrollersController;
use App\Http\Controllers\Api\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::resource('events', EventsController::class);
Route::resource('enrollers', EnrollersController::class);

Route::group([ 'middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', [AdminController::class, 'login']);
    Route::post('logout', [AdminController::class, 'logout']);
    Route::post('refresh', [AdminController::class, 'refresh']);
    Route::post('me', [AdminController::class, 'me']);
});