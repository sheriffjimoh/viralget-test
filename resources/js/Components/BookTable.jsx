import DangerButton from "./DangerButton";
import PrimaryButton from "./PrimaryButton";
import { router } from '@inertiajs/react'
import React, { useState } from 'react';
import NavLink from "./NavLink";

export default function BookTable({books,auth}) {

    const isLogin = auth.user ? true : false;
    const [flashMessage, setFlashMessage] = useState("");



    // handle delete book

    function    handleDel(id) {
     
       if(confirm("Are you sure you want to delete ?")){   
           router.delete(route("book.destroy", id),
                {
                  onFinish: ({completed}) => {
                    if(completed){
                        setFlashMessage(true)
                        // alert("You have successfully deleted the book")
                    }

                  },
                }
            );
        }
    }

    return (
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg   flex flex-col items-center  p-5">
               

               <div className="flex justify-end w-full py-4">
               {
                    isLogin ?
                      <NavLink  href={route('book.create')} >Create Book</NavLink>
                  : null

               }

               </div>
               
               
                 {flashMessage ?
                         <div className="mb-4 font-medium text-sm text-green-600">Book Deleted successful</div>  
                         : null
                       }
           
        <table class="table-auto">
              <thead>
                  <tr>
                  <th class="px-4 py-2">#</th>
                  <th class="px-4 py-2">Title</th>
                  <th class="px-4 py-2">Author</th>
                  <th class="px-4 py-2">Publication Date</th>

                  {
                    isLogin ?
                    <th class="px-4 py-2">Action</th>
                    : null
                  }
                 
                  </tr>
              </thead>
              <tbody>

                {
                    books?.map(( book, index) => (
                        
                        <tr  key={book.id}>
                         <td class="border px-4 py-2">{index}</td> 
                        <td class="border px-4 py-2">{book.title}</td>
                        <td class="border px-4 py-2">{book.author}</td>
                        <td class="border px-4 py-2">{new Date(book.created_at).toLocaleDateString()}</td>
                        {
                                isLogin ?
                                <td class="border px-4 py-2 flex space-x-2">
                                      <DangerButton    onClick={ () => handleDel(book.id)} >
                                        Delete  
                                      </DangerButton>

                                      <NavLink  href={route('book.edit', book.id)}>
                                        Edit
                                      </NavLink  >

                                      {/* <a href="https://"   className="text-xs text-green-600" >
                                          Edit  <i className="fa fa-info"></i>
                                      </a> */}
                                </td>
                                : null
                         }
                        </tr>
                    ))
                }
               
             
              </tbody>
           </table>

</div>
    );
}
