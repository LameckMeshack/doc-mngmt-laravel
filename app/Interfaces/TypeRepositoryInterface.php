<?php

namespace App\Interfaces;

interface typeRepositoryInterface
{
    public function getAllTypes();
    public function getTypeById($typeId);
    public function deleteType($typeId);
    public function createType(array $typeDetails);
    public function updateType($typeId, array $newDetails);
}
