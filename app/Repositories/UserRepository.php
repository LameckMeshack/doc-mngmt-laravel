<?php

namespace App\Repositories;

use App\Interfaces\userRepositoryInterface;
use App\Models\User;

class OrderRepository implements userRepositoryInterface
{




    public function getAllUsers()
    {
        return User::all();
    }

    public function getUserById($userId)
    {
        return User::find($userId);
    }

    public function deleteUser($userId)
    {
        return User::destroy($userId);
    }

    public function createUser(array $userDetails)
    {
        return User::create($userDetails);
    }

    public function updateUser($userId, array $newDetails)
    {
        $user = User::find($userId);
        return $user->update($newDetails);
    }
}
