<?php

use App\Http\Controllers\DocumentController;
use App\Http\Controllers\TypeController;
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

// DOCUMENT ROUTES
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

// TYPE ROUTES

//get all types
Route::get('types', [TypeController::class, 'index']);

//get single type
Route::get('types/{id}', [TypeController::class, 'show']);

//post/ create type api
Route::post('types', [TypeController::class, 'store']);

// update  type api
Route::put('types/{id}', [TypeController::class, 'update']);

// delete type api
Route::delete('types/{id}', [TypeController::class, 'destroy']);

// DEPARTMENT ROUTES
