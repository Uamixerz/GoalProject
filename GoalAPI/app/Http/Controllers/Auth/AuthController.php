<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;
class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * @OA\Post(
     ** path="/api/auth/login",
     *   tags={"Auth"},
     *   summary="Login",
     *   operationId="login",
     *
     *   @OA\Parameter(
     *      name="email",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *           type="string"
     *      )
     *   ),
     *   @OA\Parameter(
     *      name="password",
     *      in="query",
     *      required=true,
     *      @OA\Schema(
     *          type="string"
     *      )
     *   ),
     *   @OA\Response(
     *      response=200,
     *       description="Success",
     *      @OA\MediaType(
     *           mediaType="application/json",
     *      )
     *   ),
     *   @OA\Response(
     *      response=401,
     *       description="Unauthenticated"
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad Request"
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="not found"
     *   ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *)
     **/


    public function login(LoginRequest $request){
        try {
            $data = $request->validated();
            if (! $token = auth()->attempt($data)) {
                return response()->json(['error' => 'Unauthorized'], Response::HTTP_UNAUTHORIZED);
            }
            return $this->createNewToken($token);
        } catch (ValidationException $exception) {
            throw new HttpResponseException(response()->json(['errors' => $exception->errors()], 422));
        }
    }

    /**
     * @OA\Post(
     *     tags={"Auth"},
     *     path="/api/auth/register",
     *     @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 required={"email","nickname","password"},
     *                 @OA\Property(
     *                     property="email",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="nickname",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="password",
     *                     type="string"
     *                 ),
     *             )
     *         )
     *     ),
     *     @OA\Response(response="200", description="Register")
     * )
     */


    public function register(RegisterRequest $request) {
        try {
            $data = $request->validated();
            $user = User::create($data);

            return response()->json([
                'message' => 'User successfully registered',
                'user' => $user
            ], Response::HTTP_CREATED);
        } catch (ValidationException $exception) {
            throw new HttpResponseException(response()->json(['errors' => $exception->errors()], 422));
        }
    }

    /**
     * @OA\Post(
     *     path="/api/auth/logout",
     *     tags={"Auth"},
     *     security={{"apiAuth":{}}},
     *     @OA\Response(response="200", description="Display a listing of projects.")
     * )
     */

    public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out'], Response::HTTP_OK);
    }


    /**
     * @OA\Post(
     *     path="/api/auth/refresh",
     *     tags={"Auth"},
     *     security={{"apiAuth":{}}},
     *     @OA\Response(response="200", description="Display a listing of projects.")
     * )
     */

    public function refresh() {
        return $this->createNewToken(auth()->refresh(), Response::HTTP_OK);
    }


    /**
     * @OA\Get(
     *     path="/api/auth/user-profile",
     *     tags={"Auth"},
     *     security={{"apiAuth":{}}},
     *     @OA\Response(response="200", description="Display a listing of projects.")
     * )
     */

    public function userProfile() {
        return response()->json(auth()->user(), Response::HTTP_OK);
    }

    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
//            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60 * 24 * 7,
//            'user' => auth()->user()
        ], Response::HTTP_OK);
    }
}
