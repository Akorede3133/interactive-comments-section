import React from 'react'
import amy from '../../src/assets/images/avatars/image-juliusomo.png';
const CommentBox = ({button}: {button: string}) => {  
  return (
    <section className='w-full md:grid items-start gap-4 grid-cols-[.5fr_4fr_.5fr]  md:mx-auto p-4 bg-white rounded-md relative'> 
      <img src={amy} alt="" 
          className='w-[40px] h-[40px]
          absolute
          md:relative
          bottom-2
          '
      />
      <textarea name="" id="" placeholder='Add a comment...' 
      className=' w-full border
       border-gray-500
       resize-none
        h-32 outline-none p-4
        rounded-md
        mb-10
        md:mb-0
        hover:border hover:border-primary-moderate-bluekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        cursor-pointer
        '>
      </textarea>
      <button className=' 
        uppercase bg-primary-moderate-blue
         py-2 px-8 
         rounded-md
        text-white
        absolute
        md:relative
        bottom-2
        right-2
         hover:opacity-[.6]
         '>{button}</button>
         
    </section>
  )
}

export default CommentBox