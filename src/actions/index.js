export const addComment=(data,postId)=>{
   // console.log(data);
   // console.log(postId)
    return{
        type:"ADD_COMMENT",
        payload:{
            id:new Date().getTime().toString(),
            postId:postId,
            data:data
        }
    }
}
export const deleteComment=(id)=>{
    return{
        type:"DELETE_COMMENT",
        id

    }
}