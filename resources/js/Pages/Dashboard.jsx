import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BookTable from '@/Components/BookTable';
export default function Dashboard({auth, books, errors}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    {/* <BookTable />  */}
                    <BookTable   books={books}  auth={auth} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
