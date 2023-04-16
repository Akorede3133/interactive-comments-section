import React, { useState } from 'react'
interface editProps {
  value: string;
  setNewContent: React.Dispatch<React.SetStateAction<string>>;
  setEditResponse: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditResponse = ({ value, setNewContent, setEditResponse }: editProps ) => {
  const [text, setText] = useState(value)
  const closeEdit = () => {
    setNewContent(text);
    setEditResponse(false);
  }
  return (
    <div className=''>
        <textarea name="" id="" 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        className='w-full border
        border-gray-500
        resize-none
        h-32 outline-none p-4
        rounded-md
        '>
      </textarea>
      <button 
      onClick={closeEdit}
      className=' 
        uppercase bg-primary-moderate-blue
         py-2 px-8 
         rounded-md
        text-white
         hover:opacity-[.6]
          float-right
         '>update</button>
    </div>
  )
}

export default EditResponse