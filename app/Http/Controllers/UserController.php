<?php

namespace App\Http\Controllers;

use App\Interfaces\userRepositoryInterface;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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

    // ------------ [ User Login ] -------------------
    public function userLogin(Request $request)
    {

        $validator          =       Validator::make(
            $request->all(),
            [
                "email"             =>          "required|email",
                "password"          =>          "required"
            ]
        );

        if ($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }


        // check if entered email exists in db
        $email_status       =       User::where("email", $request->email)->first();


        // if email exists then we will check password for the same email

        if (!is_null($email_status)) {
            $password_status    =   User::where("email", $request->email)->where("password", md5($request->password))->first();

            // if password is correct
            if (!is_null($password_status)) {
                $user           =       $this->userDetail($request->email);

                return response()->json(["status" => $this->status_code, "success" => true, "message" => "You have logged in successfully", "data" => $user]);
            } else {
                return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Incorrect password."]);
            }
        } else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Unable to login. Email doesn't exist."]);
        }
    }



    public function destroy(Request $request)
    {
        $user = $request->id;
        $this->userRepository->deleteUser($user);
        return response()->json(['message' => 'User deleted successfully']);
    }
    public function profile()
    {
        return view('profile', array('user' => Auth::user()));
    }
}
