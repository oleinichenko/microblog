import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import  './post-add.scss';
export default function PostAdd({setData,data, isLogIn}) {
        if (isLogIn){}

    const [value, setValue]=useState('');
   const postAdd=()=>{
       if (value!==''){
             setData(
           [...data,{
               id:uuidv4(),
               post:value,
               pinned:false
           }]
       )
       setValue('')
       

       }
    console.log(data);  
   }
    if(isLogIn){
        return(
        <div className='post-add d-flex justify-content-center '>
            <textarea
                placeholder="What's new?"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                
                />
            <button onClick={postAdd} className="btn-style" >Send</button>
        </div>
    )
    }
    else return null;
    
}