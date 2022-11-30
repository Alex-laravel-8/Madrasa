@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Emails</div>

                <div class="card-body">
                    <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">Sr.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                            @foreach ($mail as $item)

                            <tr>
                                <th>{{$srno++}}</th>
                                <td>@if ($item->name != NULL){{$item->name}}@else NULL @endif</td>
                                <td>{{$item->email}}</td>
                                <td>@if ($item->name != NULL){{$item->phone}}@else NULL @endif</td>
                            </tr>

                            @endforeach

                        </tbody>
                      </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
