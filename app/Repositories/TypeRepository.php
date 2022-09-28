<?php

namespace App\Repositories;

use App\Interfaces\typeRepositoryInterface;
use App\Models\Type;

class TypeRepository implements typeRepositoryInterface
{

    public function getAllTypes()
    {
        return Type::all();
    }

    public function getTypeById($typeId)
    {
        return Type::find($typeId);
    }

    public function deleteType($typeId)
    {
        return Type::destroy($typeId);
    }

    public function createType(array $typeDetails)
    {
        return Type::create($typeDetails);
    }

    public function updateType($typeId, array $newDetails)
    {
        $type = Type::find($typeId);
        return $type->update($newDetails);
    }
}
