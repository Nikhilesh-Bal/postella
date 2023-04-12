import React ,{useState}from "react";
import {useSelector,useDispatch} from 'react-redux';
import { addComment ,deleteComment} from "../actions";
import './styles/Comment.css';

const Comment=()=>{
    const [inputData,setInputData]=useState('');
    const list=useSelector((state)=>state.commentReducer.list);
    const dispatch=useDispatch();
    return(
        <div className="comment-container">
            <div className="comment-list">
                {list.map((elem)=>{
                    return(
                        <div  className="comment-body" key={elem.id}>
                           <div className="comment-description">{elem.data}</div>
                           <i className="far fa-trash-alt add-btn" onClick={()=>dispatch(deleteComment(elem.id))}></i>
                        </div>
                    );
                })}
            </div>
            <div className="new-comment">
                 <input className="comment-input" type="text" placeholder="Add comment" value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                 <i className="fa fa-plus add-btn" style={{marginRight:"0px"}} onClick={()=>dispatch(addComment(inputData),
                    setInputData(''))}></i>
                 
            </div>
        </div>
    );
}
export default Comment;