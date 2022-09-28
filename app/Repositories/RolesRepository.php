<?php

namespace App\Repositories;

use App\Interfaces\roleRepositoryInterface;
use App\Models\Role;

class RolesRepository implements roleRepositoryInterface
{

    public function getAllRoles()
    {
        return Role::all();
    }

    public function getRoleById($roleId)
    {
        return Role::find($roleId);
    }

    public function deleteRole($roleId)
    {
        return Role::destroy($roleId);
    }

    public function createRole(array $roleDetails)
    {
        return Role::create($roleDetails);
    }

    public function updateRole($roleId, array $newDetails)
    {
        $role = Role::find($roleId);
        return $role->update($newDetails);
    }
}
