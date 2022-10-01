<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// use Validator;
use Illuminate\Support\Facades\Validator;




class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(Request $request)
    {
        // dd(request()->all());
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:3',
            'password_confirmation' => 'required',
            'phone' => 'required|string|min:10',
            // validate images
            'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'role_id' => 'required|integer',
            'department_id' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        // handling photo upload
        if ($request->hasFile('photo')) {
            $image = $request->file('photo');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/uploads/profile');
            $image->move($destinationPath, $name);
        }

        $user = User::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password), 'photo' => $name]
        ));
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
            // 'remember_me' => 'boolean'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (!$token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    public function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->guard('api')->factory()->getTTL() * 60,
            // 'expires_in' => auth('api')->factory()->getTTL() * 60,
            'user' => auth()->user()

        ]);
    }
}
