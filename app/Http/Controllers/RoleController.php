<?php

namespace App\Http\Controllers;

use App\Interfaces\roleRepositoryInterface;
use App\Models\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;


class RoleController extends Controller
{
    // constructor
    public function __construct(roleRepositoryInterface $roleRepository)

    {
        $this->roleRepository = $roleRepository;
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
        $roles = $this->roleRepository->getAllRoles();
        return response()->json($roles);
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
    public function store(Request $request)
    {
        //
        $roleDetails = $request->only([
            "name",
        ]);
        $role = $this->roleRepository->createRole($roleDetails);
        return response()->json($role);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): JsonResponse
    {
        //
        $role = $this->roleRepository->getRoleById($request->id);
        return response()->json($role);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
        $roleDetails = $request->only([
            "name",
        ]);
        $roldeId =
            $request->route('id');
        $role = $this->roleRepository->updateRole($roldeId, $roleDetails);
        return response()->json($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $roleDetails = $request->id;
        $this->roleRepository->deleteRole($roleDetails);
        return response()->json(['message' => 'Role deleted successfully']);
    }
}
