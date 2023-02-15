import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link, Head } from '@inertiajs/react';

export default  function CustomHeader({auth}){


    return (
        <div className="fixed top-0 right-0 px-6 py-4 sm:block">
        { auth.user ? (
            
       <div className="hidden sm:flex sm:items-center sm:ml-6">
            {/* <div className="ml-3 relative">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                            >
                                {auth.user.name}

                                <svg
                                    className="ml-2 -mr-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div> */}

            <NavLink href={route('dashboard')}> Dashboard </NavLink>
        </div>

        ) : (
            <>
                <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                    Log in
                </Link>

                <Link
                    href={route('register')}
                    className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                >
                    Register
                </Link>
            </>
        )}
    </div>
    )
}