<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mail;
use RealRashid\SweetAlert\Facades\Alert;

class DashboardController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
    public function mail(Request $request){
        $validatedData = $request->validate([
            'firstname' => 'nullable',
            'email' => 'nullable',
            'phone' => 'nullable',
        ]);

        $mail = new Mail();
        $mail->name = $request->firstname;
        $mail->email = $request->email;
        $mail->phone = $request->phone;
        $mail->save();
        Alert::Success('Success', "Form Submit Successfully");
        return redirect()->route('welcome');
        // return json_encode($validatedData);
    }
    public function newsletter(Request $request){
        $validatedData = $request->validate([
            'email' => 'nullable',
        ]);

        $mail = new Mail();
        $mail->email = $request->email;
        $mail->save();
        Alert::Success('Success', "Form Submit Successfully");
        return redirect()->route('welcome');
        // return json_encode($validatedData);
    }
}
