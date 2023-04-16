
const initialData={
    list:[]
}

//const [list,setList]=useState([]);

const commentReducer=(state=initialData,action)=>{
   //console.log(state);
  switch(action.type){
    case "ADD_COMMENT":
         const {id,postId,data}=action.payload;
         //console.log(postId);
         //console.log(initialData.list);
         return{
            ...state,
            list:[
                ...state.list,
                {
                  id:id,
                  postId:postId,
                  data:data
                }
            ]
         } 
    case "DELETE_COMMENT":
       //newList will have updated data  
   const newList= state.list.filter((elem)=>elem.id !== action.id)
   //console.log(newList);
         return{
            ...state,
            list:newList
         } 
         default: return state; 
      }

      
}
export default commentReducer;