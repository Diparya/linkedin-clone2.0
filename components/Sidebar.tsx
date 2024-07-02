import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { getAllPosts } from '@/lib/serveractions'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Button } from './ui/button'

const Sidebar = async ({ user }: { user: any }) => {

    const posts = await getAllPosts();
    const userPosts = posts?.filter((post: { user: { userId: any } }) => post.user.userId === user?.id);
    const userComments = posts.flatMap(
        (post: { comments: any[] }) =>
          post?.comments?.filter((comment) => comment.user.userId === user?.id) ||
          []
      );
    return (
        <div className="flex flex-col justify-center items-center bg-white mr-6 rounded-lg border py-4">
            <div className='flex relative flex-col items-center'>
                <div className='w-full h-16 overflow-hidden'>
                    {
                        user && (
                            <Image
                                src={"/banner.jpg"}
                                alt="Banner"
                                width={200}
                                height={200}
                                className='w-full h-full rounded-t'
                            />
                        )
                    }
                </div>
                <div className='my-1 absolute top-10 left-[40%]'>
                    <ProfilePhoto src={user ? user?.imageUrl! : "https://github.com/shadcn.png"} />
                </div>

                <SignedIn>
                    <div className="text-center mt-5">
                        <p className="font-semibold">
                            {user?.firstName} {user?.lastName}
                        </p>

                        <p className="text-xs">
                            @{user?.firstName}
                            {user?.lastName}-{user?.id?.slice(-4)}
                        </p>
                    </div>
                </SignedIn>

                <SignedOut>
                    <div className="text-center space-y-2">
                        <p className="font-semibold pt-5">You are not signed in</p>

                        <Button asChild className="bg-[#0B63C4] text-white">
                            <SignInButton>Sign in</SignInButton>
                        </Button>
                    </div>
                </SignedOut>


            </div>
            <hr className="w-full border-gray-200 my-5" />

            <div className="flex justify-between w-full px-4 text-sm">
                <p className="font-semibold text-gray-400">Posts</p>
                <p className="text-blue-400">{userPosts.length}</p>
            </div>

            <div className="flex justify-between w-full px-4 text-sm">
                <p className="font-semibold text-gray-400">Comments</p>
                <p className="text-blue-400">{userComments.length}</p>
            </div>

            {/* <div className='text-xs'>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Post Impression</p>
                    <p className='text-blue-500 font-bold'>88</p>
                </div>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Posts</p>
                    <p className='text-blue-500 font-bold'>{posts.length}</p>
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar