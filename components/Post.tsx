"use client"
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Trash2 } from 'lucide-react'
import { Badge } from './ui/badge'
import { IPostDocument } from '@/models/post.model'
import PostContent from './PostContent'
import SocialOptions from './SocialOptions'
import ReactTimeago from "react-timeago";
import { deletePostAction } from '@/lib/serveractions'
import { toast } from 'sonner'

const Post = ({ post }: { post: IPostDocument }) => {
    const { user } = useUser();
    const fullName = post?.user?.firstName + " " + post?.user?.lastName;
    const loggedInUser = user?.id === post?.user?.userId;
    const isAuthor = user?.id === post.user.userId;

    return (
        <div className='bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300'>
            <div className=' flex gap-2 p-4'>
                <ProfilePhoto src={post?.user?.profilePhoto!} />
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <h1 className='text-sm font-bold'>{fullName}{" "} {isAuthor && (
                <Badge className="ml-2" variant="secondary">
                  Author
                </Badge>
              )}</h1>
                        <p className='text-xs text-gray-500'>@{post.user.firstName}
                        {post.user.lastName}-{post.user.userId.toString().slice(-4)}</p>

                        <p className='text-xs text-gray-500'>
                            <ReactTimeago date={new Date(post.createdAt)} />
                        </p>
                    </div>
                </div>
                <div>
                    {
                        loggedInUser && (
                            <Button onClick={() => {
                                const res = deletePostAction(post._id);
                                toast.promise(res, {
                                    loading: "Deleting post...",
                                    success: "Post deleted!",
                                    error: "Error deleting post",
                                  });
                            }} size={'icon'} className='rounded-full' variant={'outline'}>
                                <Trash2 />
                            </Button>
                        )
                    }
                </div>
            </div>
            <PostContent post={post} />
            <SocialOptions post={post}/>
        </div>
    )
}

export default Post