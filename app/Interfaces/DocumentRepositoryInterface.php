<?php

namespace App\Interfaces;

interface documentRepositoryInterface
{
    public function getAllDocuments();
    public function getDocumentById($userId);
    public function deleteDocument($userId);
    public function createDocument(array $userDetails);
    public function updateDocument($userId, array $newDetails);
}
