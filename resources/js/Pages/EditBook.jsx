import { Head, Link, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import CustomHeader from '@/Components/CustomHeader';
import NavLink from '@/Components/NavLink';

export default function CreateBook({auth, book}){
 

    console.log("book:", book)
    const { data, setData, patch, processing, errors, reset } = useForm({
        author: book.author,
        title: book.title,
        id: book.id
    });



    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };


    function submit(e){
        e.preventDefault();
        patch(route('book.edit', book.id));

    }

    return  (
        <div>

            <div className='m-5'>
                  <NavLink href={route('index')}> Back</NavLink>
            </div>

                <div className="flex justify-center pt-8 sm:justify-start pl-8">
                       EDIT BOOK 
                    </div>

                    <CustomHeader  auth={auth}  />
                 
            <div  className='max-w-xl mx-auto  shadow-md p-4  mt-20 '>
                         <form onSubmit={submit}>
                            <div>
                                <InputLabel forInput="author" value="Author" />

                                <TextInput
                                    id="author"
                                    type="author"
                                    name="author"
                                    value={data.author}
                                    className="mt-1 block w-full border p-1"
                                    autoComplete="author"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />

                                <InputError message={errors.author} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabel forInput="title" value="Title" />

                                <TextInput
                                    id="title"
                                    type="title"
                                    name="title"
                                    value={data.title}
                                    className="mt-1 block w-full  border p-1"
                                    autoComplete="title"
                                    handleChange={onHandleChange}
                                />

                            </div>

                          

                            <div className="flex items-center justify-end mt-4">
                               

                                <PrimaryButton className="ml-4" processing={processing}>
                                    Update Book
                                </PrimaryButton>
                            </div>
                        </form>
                 </div>
        </div>
    )
}