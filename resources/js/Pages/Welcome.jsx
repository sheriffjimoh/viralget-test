import {  Head } from '@inertiajs/react';
import BookTable from '@/Components/BookTable';
import CustomHeader from '@/Components/CustomHeader';
export default function Welcome({books,auth}) {
  

    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top my-5 justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
               

                <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 pb-5 sm:justify-start sm:pt-0">
                        <span className='text-xl'>   All these books are available for sales</span>  
                    </div>F

                    <CustomHeader  auth={auth}  />
                     

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">


                    {
                        books.map((book) => (
                        <div class="bg-white rounded-lg overflow-hidden shadow-md">
                            <div class="p-4">
                            <h2 class="text-xl font-semibold mb-2">{book.title}</h2>
                            <p class="text-gray-700 mb-2"><strong>Author:</strong> {book.author}</p>
                            <p class="text-gray-700"><strong>Publication Date:</strong> {new Date(book.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>
                        ))
                    }
                       
                       
                        
                  </div>

                    
                </div>
            </div>
        </>
    );
}
