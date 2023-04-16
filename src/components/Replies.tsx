import React, { useState } from 'react'
import plus from '../../src/assets/images/icon-plus.svg';
import minus from '../../src/assets/images/icon-minus.svg';
import reply from '../../src/assets/images/icon-reply.svg';
import del from '../../src/assets/images/icon-delete.svg';
import edit from '../../src/assets/images/icon-edit.svg';
import amy from '../../src/assets/images/avatars/image-amyrobson.webp';
import Comments from './Comments'
import SingleComment from './SingleComment'
import data from '../../public/data.json';

import { repliesProp } from './Comments';
import CommentBox from './CommentBox';
import EditResponse from './EditResponse';
import { useGlobalContext } from './context';
const Replies = ({ id, user, content, createdAt, score, replyingTo}: repliesProp) => {
  const {currentUser} = data;
  const [showReply, setShowReply] = useState<boolean>(false);
  const [editResponse, setEditResponse] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(content);
  const {setDeleteModal} = useGlobalContext();  
  
  return (
   <>
     <section className='ml-4 md:ml-10 bg-white rounded-md p-4 md:w-[95%] md:relative grid gap-8'>
       <article className='md:px-10'>
          <section className='flex items-center gap-2'>
              <img src={amy} alt="" className='w-[40px] h-[40px]'/>
              <p className='font-medium'>{user.username}</p>
              <span className='text-neutral-dark-blue'>{createdAt}</span>
          </section>
          <section className='pt-2 leading-6 text-neutral-dark-blue'>
              {
                editResponse ? <EditResponse setEditResponse={setEditResponse} value={newContent} setNewContent={setNewContent} />
                : <p><span className=' text-primary-moderate-blue'>{`@${replyingTo}`}</span> {newContent}</p>
              }
          </section>
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
            
              { currentUser.username === user.username ? <article className='flex gap-4 items-center'>
                  <button className='flex items-center gap-2 hover:opacity-70' onClick={()=> setDeleteModal(true)}>
                      <img src={del} alt="" />
                      <span className=' text-primary-soft-red font-bold'>Delete</span>
                  </button>
                  <button className='flex items-center gap-2 hover:opacity-70' onClick={()=> setEditResponse(true)}>
                      <img src={edit} alt="" />
                      <span className=' text-primary-moderate-blue font-bold' >Edit</span>
                  </button>
              </article>  :
                <button className='flex items-center gap-3' onClick={() => setShowReply(true)}>
                  <img src={reply} alt="" />
                  <span className=' text-primary-moderate-blue font-bold'>Reply</span>
                </button>
              }
          </section>
        </article>
    </section>
    {
      showReply && 
      <section  className='ml-4 md:ml-10 bg-white rounded-md p-4 md:w-[95%] md:relative grid gap-8'>
      <CommentBox button='reply' />

    </section>
    }
   </>
  )
}

export default Replies