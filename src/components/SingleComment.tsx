import React, { useState } from 'react'
import plus from '../../src/assets/images/icon-plus.svg';
import minus from '../../src/assets/images/icon-minus.svg';
import reply from '../../src/assets/images/icon-reply.svg';
import delIcon from '../../src/assets/images/icon-delete.svg';
import edit from '../../src/assets/images/icon-edit.svg';
import Replies from './Replies';
import { commentProp } from './Comments';
import CommentBox from './CommentBox';
import { useGlobalContext } from './context';
const SingleComment= ({id, createdAt, content, score, user, replies}: commentProp) => {
    const [showReply, setShowReply] = useState<boolean>(false);
    
    
  return (
    <>
        <section className='bg-white rounded-md p-4 w-full md:relative grid gap-8'>
        <article className='md:px-10'>
            <section className='flex items-center gap-2'>
                <img src={user.image.webp} alt="" className='w-[40px] h-[40px]'/>
                <p className='font-medium'>{user.username}</p>
                <span className='text-neutral-dark-blue'>{createdAt}</span>
            </section>
            <p className='pt-2 leading-6 text-neutral-dark-blue'>
                {content}
            </p>
        </article>
        <article className='flex justify-between items-center mt-6 md:mt-0'>
            <section className='flex md:absolute md:top-0 md:mt-4 md:left-2 md:flex-col gap-8 md:gap-4 rounded-md items-center bg-neutral-light-gray p-2'>
                <button className=' cursor-pointer'>
                    <img src={plus} alt="" />
                </button>
                <p className=' text-primary-moderate-blue font-bold'>{score}</p>
                <button className=' cursor-pointer'>
                    <img src={minus} alt="" />
                </button>
            </section>
            <section className='md:absolute top-0 right-10 md:mt-5 '>
                <button className='flex items-center gap-3' onClick={()=> setShowReply(true)}>
                    <img src={reply} alt="" />
                    <span className=' text-primary-moderate-blue font-bold'>Reply</span>
                </button>
            </section>
        </article>
    </section>
    {
        showReply && <CommentBox button='reply' />
    }
    {
        replies && replies.map(reply => {            
            return <Replies key={reply.id} {...reply} />
        })
    }
    </>
  )
}

export default SingleComment