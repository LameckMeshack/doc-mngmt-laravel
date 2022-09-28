<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTypeRequest;
use App\Http\Requests\UpdateTypeRequest;
use App\Interfaces\typeRepositoryInterface;
use App\Models\Type;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TypeController extends Controller
{

    // constructor
    public function __construct(typeRepositoryInterface $typeRepository)
    {
        $this->typeRepository = $typeRepository;
        // $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $types = $this->typeRepository->getAllTypes();
        return response()->json($types);
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
     * @param  \App\Http\Requests\StoreTypeRequest  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(StoreTypeRequest $request)
    public function store(Request $request)
    {
        //
        $typeDetails = $request->only([
            "name",
        ]);
        $type = $this->typeRepository->createType($typeDetails);
        return response()->json($type);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): JsonResponse
    {
        //
        $typeId = $request->route('id');
        $type = $this->typeRepository->getTypeById($typeId);
        return response()->json($type);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function edit(Type $type)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTypeRequest  $request
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $typeId = $request->route('id');
        $typeDetails = $request->only([
            "name",
        ]);
        $type = $this->typeRepository->updateType($typeId, $typeDetails);
        return response()->json($type);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Type  $type
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request): JsonResponse
    {
        //
        $typeId = $request->id;
        $this->typeRepository->deleteType($typeId);
        return response()->json(['message' => 'Type deleted successfully']);
    }
}
