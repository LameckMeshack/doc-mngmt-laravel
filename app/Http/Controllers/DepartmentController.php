<?php

namespace App\Http\Controllers;

use App\Interfaces\departmentRepositoryInterface;
use App\Models\Department;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class DepartmentController extends Controller
{
    // constructor
    public function __construct(departmentRepositoryInterface $departmantRepository)
    {
        $this->departmentRepository = $departmantRepository;
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
        $departments = $this->departmentRepository->getAllDepartments();
        return response()->json($departments);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request): JsonResponse
    {
        //
        $departmentDetails = $request->only([
            "name",
        ]);
        $department = $this->departmentRepository->createDepartment($departmentDetails);
        return response()->json($department);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): JsonResponse
    {
        //
        $departmentId = $request->route('id');
        $department = $this->departmentRepository->getDepartmentById($departmentId);
        return response()->json($department);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $departmentDetails = $request->only([
            "name",
        ]);
        $departmentId = $request->route('id');
        $department = $this->departmentRepository->updateDepartment($departmentId, $departmentDetails);
        return response()->json($department);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Department $department)
    {
        //
        $departmentId = $request->only([
            "id",
        ]);
        $department = $this->departmentRepository->deleteDepartment($departmentId);
        return response()->json($department);
    }
}
