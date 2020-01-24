<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/fms/users', 'User\UserController@getAllUsers')->name('User-List');
Route::get('/fms/delete/{id}', 'User\UserController@deleteUser')->name('Delete-User');
// Route::get('/fms/users', function () {
//     return json_encode(['name' => 'asds']);
// })->name('User-List');




Route::get('/{path?}', function () {
    return view('home');
})->where('path', '.*');
