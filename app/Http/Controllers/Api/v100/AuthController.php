<?php

namespace App\Http\Controllers\Api\v100;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\v100\VerificationController;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:60',
            'family' => 'required|max:60',
            'email' => 'required|email',
            'phone' => 'required|unique:users',
            'stu_number' => 'required|unique:users',
            'password' => 'required|confirmed'
        ]);
        $validatedData['password'] = bcrypt($request->password);
        $user = User::create($validatedData);
        $access_token = $user->createToken('authToken')->accessToken;

        $verify = new VerificationController();
        $verify->send($user);
        return response()->json(['status' => 'success','codeStatus' => 'success', 'user' => $user, 'access_token' => $access_token]);
    }

    public function login(Request $request)
    {
        $login_date = $request->validate([
            'stu_number' => 'required',
            'password' => 'required'
        ]);

        if (!auth()->attempt($login_date)) {
            return response()->json(['status' => 'error', 'message' => 'شماره دانشجویی یا رمز عبور اشتباه است']);
        }

        $access_token = auth()->user()->createToken('authToken')->accessToken;

        return response(['status' => 'success', 'user' => auth()->user(), 'access_token' => $access_token]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['status' => 'success', 'message' => 'شما با موفقیت خارج شدید']);
    }
}
