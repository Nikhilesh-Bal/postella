import React from "react";
import PostCard from "./PostCard";

const PostComponent = ({ cardInfo }) => {
   // console.log(movieInfo);
  return (
    
      <div className="container" style={{marginLeft:"80px"}} >
        
          {cardInfo.map((curVal, id) => {
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
    
  );
};

export default PostComponent;