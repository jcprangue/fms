<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;


class UserController extends Controller
{

    private $userRepo;
    function __construct(User $userRepo)
    {
        $this->userRepo = $userRepo;
    }

    function getAllUsers()
    {
        return User::all();
    }

    function update(User $id, Request $request)
    {
        $collection = $request->only('id', 'name');
        $id->update($collection);
    }

    function deleteUser(User $id)
    {
        $id->delete();
        return response()->json($id, 202);
    }
}
