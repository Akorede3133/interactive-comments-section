import Comments from './components/Comments';
import CommentBox from './components/CommentBox';
import { useState } from 'react';
import { useGlobalContext } from './components/context';
import DeleteModal from './components/DeleteModal';
function App() {
  const {deleteModal} = useGlobalContext();
  
  return (
    <div className="flex relative flex-col gap-8 bg-neutral-light-gray p-4 h-full">
      <Comments />
      <div className='w-full md:w-[60%] md:mx-auto'>
        <CommentBox button='send' />
      </div>
      {deleteModal && <DeleteModal />}
    </div>
  )
}

export default App
