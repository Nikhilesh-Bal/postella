export const addComment=(data)=>{
    return{
        type:"ADD_COMMENT",
        payload:{
            id:new Date().getTime().toString(),
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