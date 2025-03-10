import React, { useState } from 'react'
import '../App.css'

function LikeButton({isLiked}) {
    const[like,setlike]=useState(isLiked);


  return (
    <div className='like-button'>
        <button onClick={(e)=>setlike(!like)}>
            {like ? "❤️":"🤍"}
        </button>
    </div>
  )
}

export default LikeButton;