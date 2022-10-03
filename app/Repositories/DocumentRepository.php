<?php

namespace App\Repositories;

use App\Interfaces\documentRepositoryInterface;
use App\Models\Document;


class DocumentRepository implements documentRepositoryInterface
{

    public function getAllDocuments()
    {
        return Document::with('department')->get();
    }

    public function getDocumentById($documentId)
    {
        return Document::find($documentId);
    }

    public function deleteDocument($documentId)
    {
        return Document::destroy($documentId);
    }

    public function createDocument(array $userDetails)
    {
        return Document::create($userDetails);
    }

    public function updateDocument($documentId, array $newDetails)
    {
        $document = Document::find($documentId);
        return $document->update($newDetails);
    }
}
