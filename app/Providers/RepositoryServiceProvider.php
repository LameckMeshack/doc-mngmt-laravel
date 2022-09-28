<?php

namespace App\Providers;

use App\Interfaces\departmentRepositoryInterface;
use App\Interfaces\documentRepositoryInterface;
use App\Interfaces\roleRepositoryInterface;
use App\Interfaces\typeRepositoryInterface;
use App\Repositories\DepartmentRepository;
use App\Repositories\DocumentRepository;
use App\Repositories\RolesRepository;
use App\Repositories\TypeRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // document
        $this->app->bind(
            documentRepositoryInterface::class,
            DocumentRepository::class
        );
        // type
        $this->app->bind(
            typeRepositoryInterface::class,
            TypeRepository::class
        );

        //Role
        $this->app->bind(
            roleRepositoryInterface::class,
            RolesRepository::class
        );

        //Department
        $this->app->bind(
            departmentRepositoryInterface::class,
            DepartmentRepository::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
