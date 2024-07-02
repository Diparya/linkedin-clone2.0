import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'
import { getAllPosts } from '@/lib/serveractions';
import { SignedIn } from '@clerk/nextjs';

const Feed = async ({ user }: { user: any }) => {
  const userData = JSON.parse(JSON.stringify(user));
  const posts = await getAllPosts();

  return (
    <div className='flex-1'>
      <SignedIn>
        <PostInput user={userData} />

      </SignedIn>
      <Posts posts={posts!} />
    </div>
  )
}

export default Feed