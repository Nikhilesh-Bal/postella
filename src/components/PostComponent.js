import React from "react";
import PostCard from "./PostCard";

const PostComponent = ({ movieInfo }) => {
   // console.log(movieInfo);
  return (
    
      <div className="container" >
        <div className="grid grid-three-column">
          {movieInfo.map((curVal, id) => {
            return <PostCard key={id} 
            id={id}
            username={curVal.author.username} 
            img={curVal.author.image} 
            title={curVal.title}
            description={curVal.description}
            favoritesCount={curVal.favoritesCount}
            tagCount={curVal.tagList.length}  />;
          })}
        </div>
      </div>
    
  );
};

export default PostComponent;