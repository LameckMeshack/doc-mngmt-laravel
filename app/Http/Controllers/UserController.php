<?php

namespace App\Http\Controllers;

use App\Interfaces\userRepositoryInterface;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $userRepository;

    public function __construct(userRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index(): JsonResponse
    {
        $users = $this->userRepository->getAllUsers();
        return response()->json($users);
    }

    public function show(Request $request): JsonResponse
    {
        $userId = $request->route('id');
        $user = $this->userRepository->getUserById($userId);
        return response()->json($user);
    }

    public function create()
    {
        return view('users.create');
    }

    public function store(Request $request)
    {
        $userDetails = $request->only([
            'name',
            'email',
            'password',
            'department_id',
            'role_id',
            'phone',
            'email',
            'photo',
        ]);

        $user = $this->userRepository->createUser($userDetails);
        return response()->json($user);
    }

    public function edit($userId)
    {
        $user = $this->userRepository->getUserById($userId);
        return view('users.edit', compact('user'));
    }

    public function update(Request $request)
    {
        $userId = $request->route('id');
        $userDetails = $request->only([
            'name',
            'email',
            'password',
            'department_id',
            'role_id',
            'phone',
            'photo',
        ]);
        $type = $this->userRepository->updateUser($userId, $userDetails);
        return response()->json($type);
    }

    public function destroy(Request $request)
    {
        $user = $request->id;
        $this->userRepository->deleteUser($user);
        return response()->json(['message' => 'User deleted successfully']);
    }
}
