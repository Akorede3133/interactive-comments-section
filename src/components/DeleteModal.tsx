import React from 'react'
import { useGlobalContext } from './context'

const DeleteModal = () => {
  const { setDeleteModal} = useGlobalContext()
  return (
    <section className=' bg-[rgba(0,0,0,.4)]
     absolute top-0
     w-full left-0 
     h-full flex
     items-center
     justify-center
     '>
        <article className='bg-white
        w-[90%]
        md:w-[400px]
        p-4
        px-6
        rounded-md
        '>
            <h2 className=' 
            text-neutral-grayish-blue
            font-bold
            text-2xl
            '>Delete comment</h2>
            <p className=' text-neutral-grayish-blue py-2'>Are you sure you wnat to delete this
                comment? This will remove the comment
                and can't be undone.
            </p>
            <section className='flex justify-between gap-4'>
                <button className='
                bg-neutral-grayish-blue
                p-2
                px-4
                rounded-md
                text-white
                uppercase
                '
                onClick={() => setDeleteModal(false)}
                >no, cancel</button>
                <button className='
                 bg-primary-soft-red
                 p-2
                 px-4
                 rounded-md
                 text-white
                 uppercase
                '>yes, delete</button>
            </section>
        </article>
    </section>
  )
}

export default DeleteModal