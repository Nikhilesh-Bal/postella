import React,{useState} from "react";
const initialData={
    list:[]
}

//const [list,setList]=useState([]);

const commentReducer=(state=initialData,action)=>{
  switch(action.type){
    case "ADD_COMMENT":
         const {id,data}=action.payload;
         return{
            ...state,
            list:[
                ...state.list,
                {
                  id:id,
                  data:data
                }
            ]
         } 

    case "DELETE_COMMENT":
       //newList will have updated data  
   const newList= state.list.filter((elem)=>elem.id !== action.id)
         return{
            ...state,
            list:newList
         } 
         default: return state; 
      }

      
}
export default commentReducer;