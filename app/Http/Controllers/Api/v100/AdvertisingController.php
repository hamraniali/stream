<?php

namespace App\Http\Controllers\Api\v100;

use App\Advertising;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdvertisingController extends Controller
{
    public function index()
    {
        $advertisings = Advertising::latest()->paginate(20);
        return response()->json(['status' => 'success','data' => $advertisings]);
    }

    public function show($id)
    {
        $advertising = Advertising::find($id);

        if ($advertising != [] && $advertising != '' && $advertising != null){
            return response()->json(['status' => 'success' , 'data' => $advertising]);
        }
        return response()->json(['status' => 'error' , 'message' => 'آگهی یافت نشد']);
    }

    public function search(Request $request)
    {
        $ads = Advertising::active()->search($request->all())->latest()->paginate(20);
        return response()->json(['status' => 'success' , 'data' => $ads]);
    }
}
