<?php

namespace App\Http\Controllers\Goals;

use App\Http\Controllers\Controller;
use App\Http\Requests\Goals\StoreRequest;
use App\Http\Requests\Goals\UpdateRequest;
use App\Http\Resources\GoalResource;
use App\Models\Goal;
use App\Services\Goal\Service;

class GoalController extends Controller
{
    public $service;
    public function __construct(Service $serviceGet)
    {
        $this->service = $serviceGet;
        $this->middleware('auth:api', ['except' => ['store','index']]);
    }
    /**
     * @OA\Get(
     *     tags={"Goal"},
     *     path="/api/goal",
     *     security={{ "bearerAuth": {} }},
     *     @OA\Response(response="200", description="List goals.")
     * )
     */
    public function index()
    {
        $goals = Goal::all();
        return GoalResource::collection($goals);
    }

    public function update(UpdateRequest $request, Goal $goal){
        $data = $request->validated();
        $this->service->update($goal, $data);
        return GoalResource::make($data);
    }
    /**
     * @OA\Post(
     *     tags={"Goal"},
     *     path="/api/goal",
     *     security={{ "bearerAuth": {} }},
     *     @OA\RequestBody(
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 required={"name","user_id", "description", "status_id", "category_id"},
     *                 @OA\Property(
     *                     property="name",
     *                     type="string",
     *                     format="string"
     *                 ),
     *                 @OA\Property(
     *                     property="description",
     *                     type="string",
     *                     format="string"
     *                 ),
     *                 @OA\Property(
     *                     property="user_id",
     *                     type="integer"
     *                 ),
     *                 @OA\Property(
     *                     property="status_id",
     *                     type="integer"
     *                 ),
     *                 @OA\Property(
     *                     property="category_id",
     *                     type="integer"
     *                 ),
     *             )
     *         )
     *     ),
     *     @OA\Response(response="200", description="Add Category.")
     * )
     */
    public function store(StoreRequest $request){
        $data = $request->validated();
        $this->service->store($data);
        return GoalResource::make($data);
    }
    public function destroy(Goal $goal){
        $this->service->destroy($goal);
        return response()->json(['message'=>'done']);
    }
}
