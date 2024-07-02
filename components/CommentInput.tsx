"use client"
import React, { useState } from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { useUser } from '@clerk/nextjs'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { createCommentAction } from '@/lib/serveractions'
import { toast } from 'sonner'

const CommentInput = ({ postId }: { postId: string }) => {
    const { user } = useUser();
    const [inputText, setInputText] = useState('');
    
    const commentActionHandler = async (formData:FormData) => {
        try {
            if(!user) throw new Error('User not authenticated');
            await createCommentAction(postId, formData);
            setInputText('');
        } catch (error) {
            throw new Error('An error occured');
        }
    }
    return (
        <form
            onSubmit={async (event) => {
                event.preventDefault();
                const formData = new FormData();
                formData.append('inputText', inputText);
                const promise = commentActionHandler(formData);
                toast.promise(promise, {
                    loading: "Posting comment...",
                    success: "Comment Posted!",
                    error: "Error creating comment",
                });
            }}
        >
            <div className='flex items-center gap-2'>
                <ProfilePhoto src={user?.imageUrl!} />
                <Input
                    type="text"
                    name="inputText"
                    placeholder='Add a comment'
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className='rounded-full'
                />
                <Button type='submit' variant={'outline'} className='rounded-full'>Comment</Button>
            </div>
        </form>
    )
}

export default CommentInput