import React from 'react'
import LikeButton from './likebutton';
import '../App.css'

function PostCard({profileImage,username,content,isLiked}) {
  return (
    <div className='post-card'> 
        <img src={profileImage}/>
        <h2>{username}</h2>
        <p>{content}</p>
        <LikeButton isLiked = {isLiked}/>
    </div>
  )
}

export default PostCard;