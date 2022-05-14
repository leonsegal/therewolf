<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFooBarRequest;
use App\Http\Requests\UpdateFooBarRequest;
use App\Models\FooBar;

class FooBarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreFooBarRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFooBarRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Http\Response
     */
    public function show(FooBar $fooBar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Http\Response
     */
    public function edit(FooBar $fooBar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateFooBarRequest  $request
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFooBarRequest $request, FooBar $fooBar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Http\Response
     */
    public function destroy(FooBar $fooBar)
    {
        //
    }
}
