import { ICommentDocument } from '@/models/comment.model'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import ReactTimeago from 'react-timeago'

const Comment = ({ comment }: { comment: ICommentDocument }) => {
    return (
        <div className='flex gap-2 my-4'>
            <div className='mt-2'>
                <ProfilePhoto src={comment?.user?.profilePhoto!} />
            </div>
            <div className='flex flex-1 justify-between p-3 bg-[#F2F2F2]'>
                <div>
                    <h1 className='font-semibold'>{`${comment?.user?.firstName} ${comment?.user?.lastName}`}</h1>
                    <p className='text-xs text-gray-400'>@{comment.user.firstName}
                  {comment.user.lastName}-
                  {comment.user.userId.toString().slice(-4)}</p>
                    <p className='my-2'>{comment.textMessage}</p>
                </div>
                <div>
                    <p className='text-xs text-gray-500'>
                        <ReactTimeago date={new Date(comment.createdAt)} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Comment