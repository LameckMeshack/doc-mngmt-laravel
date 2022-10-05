<?php

namespace App\Http\Controllers;

// use App\Http\Requests\StoreDocumentRequest;
// use App\Http\Requests\UpdateDocumentRequest;
use App\Interfaces\documentRepositoryInterface;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class DocumentController extends Controller
{
    protected $user;
    // private  documentRepositoryInterface $documentRepository;
    //constructor
    public function __construct(documentRepositoryInterface $documentRepository)
    {
        $this->documentRepository = $documentRepository;
        // $this->middleware('auth');
        $this->middleware('auth:api');
        // $this->user = Auth::user();

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

        // dd($request->all());
        // validate the request
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'required|string',
            'access' => 'required|string',
            'department_id' => 'required|integer',
            'type_id' => 'required|integer',
            'user_id' => 'required|integer',
            'file' => 'required|mimes:pdf,doc,docx,txt,pdf,zip,rar,ppsx,pptx,ppt,odt,ods,odp,odg,odf,odc,odb,odm,rtf,html,htm,xml,xls,xlsx, csv,tsv',
        ]);
        // if request validation fails
        if ($validate->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validate->errors(),
            ], 400);
        }

        //    handle the file uploads
        if ($request->hasFile('file')) {
            $file_name = $request->file('file');
            $name = time() . '.' . $file_name->getClientOriginalExtension();
            $destinationPath = public_path('/uploads/documents');
            $file_name->move(
                $destinationPath,
                $name
            );
        }

        $documentDetails = $request->only([
            "name",
            "description",
            'access',
            "type_id",
            "department_id",
            "user_id",
            'file',
        ]);

        $documentDetails['file'] = $name;
        $document = $this->documentRepository->createDocument($documentDetails);
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
    public function update(Request $request)
    {
        //
        $documentId = $request->route('id');
        $documentDetails = $request->only([
            "name",
            "access",
            "description",
            'file',
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

    public function download(Request $request): JsonResponse
    {
        //
        $documentId = $request->route('id');
        $document = $this->documentRepository->getDocumentById($documentId);
        $file = public_path() . '/uploads/documents/' . $document->file;
        $headers = array(
            'Content-Type: application/pdf',
        );
        return response()->download($file, $document->name, $headers);
    }

    public function search(Request $request): JsonResponse
    {
        $search = $request->search;
        $documents = $this->documentRepository->searchDocument($search);
        return response()->json($documents);
    }

    public function getDocumentByDepartment(Request $request): JsonResponse
    {
        $departmentId = $request->route('id');
        $documents = $this->documentRepository->getDocumentByDepartment($departmentId);
        return response()->json($documents);
    }

    public function getDocumentByType(Request $request): JsonResponse
    {
        $typeId = $request->route('id');
        $documents = $this->documentRepository->getDocumentByType($typeId);
        return response()->json($documents);
    }

    public function getDocumentByUser(Request $request): JsonResponse
    {
        $userId = $request->route('id');
        $documents = $this->documentRepository->getDocumentByUser($userId);
        return response()->json($documents);
    }

    public function getDocumentByAccess(Request $request): JsonResponse
    {
        $access = $request->route('access');
        $documents = $this->documentRepository->getDocumentByAccess($access);
        return response()->json($documents);
    }

    protected function guard()
    {
        return Auth::guard('api');
    }
}
