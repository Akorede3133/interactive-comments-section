import React, {useEffect, useState} from 'react'
import SingleComment from './SingleComment';
import amy from '../../src/assets/images/avatars/image-amyrobson.webp';
import data from '../../public/data.json';
import Replies from './Replies';
interface imageProp {
  png: string;
  webp: string;
}
interface currentUserProp {
  image: imageProp;
  username: string;
}
export interface commentProp {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: currentUserProp;
  replies: repliesProp[] | [];
}
export interface repliesProp {
  id: number;
  content: string;
  createdAt: string;
  replyingTo: string;
  score: number;
  user: currentUserProp;
}
export interface userProp {
  currentUser : currentUserProp;
  comments: commentProp[];
}
const Comments = () => {
    const [user, setUser] = useState<userProp>(data);
    const {currentUser, comments} = user;    
    
  return (
    <section className=' w-full md:w-[60%] md:mx-auto grid gap-3'>
        {
            comments.map(comment => {
                return <SingleComment key={comment.id}  {...comment} />
            })
        }
    </section>
  )
}

export default Comments