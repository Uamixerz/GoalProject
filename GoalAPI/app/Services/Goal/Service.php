<?php

namespace App\Services\Goal;


use App\Models\Goal;

class Service
{
    public function store($data)
    {
        $category = Goal::create($data);
        $category->save();
    }

    public function update(Goal $goal, $data)
    {
        $goal->update($data);
        $goal->save();
    }

    public function destroy(Goal $goal)
    {
        $goal->delete();
    }
}
