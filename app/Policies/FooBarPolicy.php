<?php

namespace App\Policies;

use App\Models\FooBar;
use App\Models\Player;
use Illuminate\Auth\Access\HandlesAuthorization;

class FooBarPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\Player  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(Player $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\Player  $user
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(Player $user, FooBar $fooBar)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Player  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(Player $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Player  $user
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(Player $user, FooBar $fooBar)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Player  $user
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(Player $user, FooBar $fooBar)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\Player  $user
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(Player $user, FooBar $fooBar)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\Player  $user
     * @param  \App\Models\FooBar  $fooBar
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(Player $user, FooBar $fooBar)
    {
        //
    }
}
