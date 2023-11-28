<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('goals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description')->nullable();

            $table->unsignedBigInteger('user_id');
            $table->index('user_id','goal_user_idx');
            $table->foreign('user_id','goal_user_fk')->on('users')->references('id');

            $table->unsignedBigInteger('category_id');
            $table->index('category_id','goal_category_idx');
            $table->foreign('category_id','goal_category_fk')->on('goal_categories')->references('id');

            $table->unsignedBigInteger('status_id');
            $table->index('status_id','goal_status_idx');
            $table->foreign('status_id','goal_status_fk')->on('goal_statuses')->references('id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('goals');
    }
};
