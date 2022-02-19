import {BsThreeDotsVertical} from "react-icons/bs";
import {AiFillPushpin,AiFillEdit,AiOutlineClose,AiOutlineCheck} from "react-icons/ai";
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import './post-list-item.scss';
export default function PostListItem({id,post,pinned, deletePost, pinPost,editPost, edit, setEdit, editValue,setEditValue, savePost, isLogIn}) {
    
   
    let  btn;
   
    if (isLogIn) {btn= < div className="d-flex ">
                        
                            
                            <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-success" >
                                       
                                            <BsThreeDotsVertical/>
                                          
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>pinPost(id,pinned)}><AiFillPushpin/> Pin</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>editPost(id, post)}><AiFillEdit/> Edit</Dropdown.Item>
                                        <Dropdown.Item onClick={()=>deletePost(id)}><AiOutlineClose /> Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                            </Dropdown>



                        
                        </div>
     
    } 

    
    
    return(
        
        <div className='d-flex justify-content-between post'>
            {
                edit===id?
                    <div className=' text-left post-text  col-md-11 col-sm-8  col-7'>
                        <textarea rows='2' cols='50' className=" " onChange={(e)=>setEditValue(e.target.value)} value={editValue}/>
                        
                    </div>:
                    <div className=' text-left post-text '>{post}</div>
            }
 
             {
                edit===id?
                    <div className='post-save  col-md-1 col-sm-2 col-3 align-self-center'>
                       
                        <div  className='cursor' onClick={()=>savePost(id)} ><AiOutlineCheck size={30}/></div>
                    </div>:
                    
                    <div className='post-menu  '>
                    {btn}
                    </div>
            }
            
            
        </div>
    )
}