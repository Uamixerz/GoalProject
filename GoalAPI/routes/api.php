<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'goal',
], function ($router) {
    Route::get('/', [\App\Http\Controllers\Goals\GoalController::class, 'index']);
    Route::post('/', [\App\Http\Controllers\Goals\GoalController::class, 'store']);
    Route::patch('/{goal}', [\App\Http\Controllers\Goals\GoalController::class, 'update']);
    Route::delete('/{goal}', [\App\Http\Controllers\Goals\GoalController::class, 'destroy']);
});