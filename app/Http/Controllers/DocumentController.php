<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Interfaces\documentRepositoryInterface;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DocumentController extends Controller
{
    //constructor
    public function __construct(documentRepositoryInterface $documentRepository)
    {
        $this->documentRepository = $documentRepository;
        // $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse
    {
        //
        $documents = $this->documentRepository->getAllDocuments();
        return response()->json($documents);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreDocumentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $documenDetails = $request->only([
            "name",
            "path",
            "description",
            "user_id",
            "department_id",
            "type_id",
        ]);

        $document = $this->documentRepository->createDocument($documenDetails);
        return response()->json($document);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): JsonResponse
    {
        //
        //   getting id parameter from request
        $documentId = $request->route('id');
        $document = $this->documentRepository->getDocumentById($documentId);
        return response()->json($document);
    }






    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateDocumentRequest  $request
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Document $document)
    {
        //
        $documentId = $request->route('id');
        $documentDetails = $request->only([
            "name",
            "path",
            "description",
            "user_id",
            "department_id",
            "type_id",
        ]);

        $document = $this->documentRepository->updateDocument($documentId, $documentDetails);
        return response()->json($document);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request): JsonResponse
    {
        //
        $documentId = $request->id;
        $this->documentRepository->deleteDocument($documentId);
        return response()->json(['message' => 'Document deleted successfully']);
    }
}
