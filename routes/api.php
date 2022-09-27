<?php

use App\Http\Controllers\DocumentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//get all document
Route::get('documents', [DocumentController::class, 'index']);

//get single document
Route::get('documents/{id}', [DocumentController::class, 'show']);

//post/ create document api
Route::post('documents', [DocumentController::class, 'store']);

// update  document api
Route::put('documents/{id}', [DocumentController::class, 'update']);

// delete document api
Route::delete('documents/{id}', [DocumentController::class, 'destroy']);
