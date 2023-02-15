<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Models\Book;
use App\Helpers\Helper;
use Illuminate\Support\Facades\Redirect;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     
     public function dashboard()
     {
 
       $books = Book::orderBy('id', 'DESC')->get();
        $data =  [
                     'canLogin' => Route::has('login'),
                     'canRegister' => Route::has('register'),
                     'laravelVersion' => Application::VERSION,
                     'phpVersion' => PHP_VERSION,
                     'books' =>  $books
        ];
 
         return Inertia::render('Dashboard', $data);
     }

     
    public function index()
    {

      $books = Book::orderBy('id', 'DESC')->get();
       $data =  [
                    'canLogin' => Route::has('login'),
                    'canRegister' => Route::has('register'),
                    'laravelVersion' => Application::VERSION,
                    'phpVersion' => PHP_VERSION,
                    'books' =>  $books
       ];

        return Inertia::render('Welcome', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('CreateBook');
   
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $book = new Book;
        $book->author = $request->author;
        $book->title = $request->title;
        $book->save();

        if($book){
            return Redirect::route('index');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
     
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['book'] = Book::find($id);
      return Inertia::render('EditBook', $data);

       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $book = Book::find($id);
        $book->author = $request->author;
        $book->title = $request->title;
        $book->save();

        if($book){
            return Redirect::route('index');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Book::where('id', $id)->first()->delete();
        sleep(1);

        // return Helper::apiRes('Book Delete Successfully');
    
        return redirect()->back()->with('message', 'Book Delete Successfully');
    }
}
