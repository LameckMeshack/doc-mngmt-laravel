<?php

namespace App\Repositories;

use App\Interfaces\departmentRepositoryInterface;
use App\Models\Department;

class DepartmentRepository implements departmentRepositoryInterface
{

    public function getAllDepartments()
    {
        return Department::all();
    }

    public function getDepartmentById($departmentId)
    {
        return Department::find($departmentId);
    }

    public function deleteDepartment($departmentId)
    {
        return Department::destroy($departmentId);
    }

    public function createDepartment(array $departmentDetails)
    {
        return Department::create($departmentDetails);
    }

    public function updateDepartment($departmentId, array $newDetails)
    {
        $department = Department::find($departmentId);
        return $department->update($newDetails);
    }
}
