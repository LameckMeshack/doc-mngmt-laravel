<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\Type;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'name' => $this->faker->name,
            'path' => $this->faker->filePath(
                $dir = '/home/robert/Downloads',
                $prefix = 'test',
                $extension = 'pdf'
            ),
            'description' => $this->faker->text,
            'type_id' => Type::all()->random()->id,
            'user_id' => User::all()->random()->id,
            'department_id' => Department::all()->random()->id,
        ];
    }
}
