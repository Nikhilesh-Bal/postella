import React from "react";
import './PostCard.css';
import {Link, useParams} from 'react-router-dom';
 const PostCard=({id,username,img,title,description,favoritesCount,tagCount})=>{
   //console.log(myData); 
    return(
        <>
        <Link to={`/view/${id}`} key={id} state={{username:username,img:img,description:description,favoritesCount:favoritesCount,tagCount:tagCount}}>
         <div className="global-container">
           <div className="post-container">
            <div className="post-header">
              <div className="author-avatar">
                 <img className="author-avatar" src={img} alt="author-avatar"/>
              </div>
              <div className="author-details">
                <div className="author-name">
                    {username}
                </div>
                <div className="author-title"></div>
              </div>
            </div>
            <div className="post-content">{description}</div>
            <div className="post-toolbar">
                 <div className="favorites-button-wrapper">
                    <button className="favorites-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="heart-button-icon" viewBox="0 0 16 16">
                       <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    </button>
                    <div className="favorites-count">
                        {favoritesCount}
                    </div>
                 </div>
                 <div className="tags-wrapper">
                     <div className="tags-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tag-fill" viewBox="0 0 16 16">
                              <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                     </div>
                     <div className="tags-count">{tagCount}</div>
                 </div>
            </div>
           </div>
           </div>
         </Link>
        </>
    );
}
export default PostCard;