import Image from 'next/image'
import React from 'react'
import SearchInput from './SearchInput'
import NavItems from './NavItems'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Briefcase, HomeIcon, MessagesSquare, SearchIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex items-center p-2 max-w-6xl mx-auto justify-between">
        <Image className=" rounded-lg" src={'/LinkedIn_logo.png'} width={40} height={40} alt="logo"/>

        <div className="flex-1 sm:block hidden">
            <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96">
                <SearchIcon className="h-4 text-gray-600"/>
                <input type="text" placeholder="Search" className=" bg-transparent flex-1 outline-none" />
            </form>
        </div>

        <div className="flex items-center space-x-4 px-6">
            <Link href='/' className="icon hidden sm:flex">
                <HomeIcon className="h-5"/>
                <p>Home</p>
            </Link>

            <Link href='/' className="icon hidden md:flex">
                <UsersIcon className="h-5"/>
                <p>Network</p>
            </Link>

            <Link href='/' className="icon hidden md:flex">
                <Briefcase className="h-5"/>
                <p>Jobs</p>
            </Link>

            <Link href='/' className="icon hidden sm:flex">
                <MessagesSquare className="h-5"/>
                <p>Messaging</p>
            </Link>

            <SignedIn>
                <UserButton/>
            </SignedIn>

            <SignedOut>
                <Button asChild variant='secondary'>
                    <SignInButton/>
                </Button>
            </SignedOut>
        </div>
    </div>
        // <div className='fixed w-full bg-white z-50 shadow-sm'>
        //     <div className=' flex items-center max-w-6xl justify-between h-14 mx-auto px-3'>
        //         <div className='flex items-center gap-2'>
        //             <Image
        //                 src={'/LinkedIn_logo.png'}
        //                 alt="Logo"
        //                 width={35}
        //                 height={35}
        //             />
        //             <div className='md:block hidden'>
        //                 <SearchInput />
        //             </div>
        //         </div>
        //         <div className='flex items-center gap-5'>
        //             <div className='md:block hidden'>
        //                 <NavItems />
        //             </div>
        //             <div>
        //                 <SignedIn>
        //                     <UserButton />
        //                 </SignedIn>
        //                 <SignedOut>
        //                     <Button className='rounded-full' variant={'secondary'}>
        //                         <SignInButton/>
        //                     </Button>
        //                 </SignedOut>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar