import React,{useState} from 'react';
import PostListItem from '../post-list-item';
export default function PostList({data, setData, isLogIn}) {
    const [edit,setEdit]=useState(null);
    const [editValue, setEditValue]=useState('');
   
   
   
        
    
   
    const deletePost=(id)=>{
        
        const newData = [...data].filter((item)=>item.id!==id);
        setData(newData);
    }

    const pinPost=(id)=>{
        
        let newData=[...data].filter(item=>{
            
            if ((item.id===id)){
               item.pinned=!item.pinned;
               
               return item;
            }
            item.pinned=false;
            return item
        })

        setData(newData);
        
        
    }
    const editPost=(id, post)=>{
        setEdit(id);
        setEditValue(post)
    }
    const savePost=(id)=>{
        let newData=[...data].map(item=>{
            if(item.id===id){
                item.post=editValue;
            }
            return item;
        })
        setData(newData);
        setEdit(null);
    }



    const element=data.map((item)=>{

                return(
                    <div key={item.id} className={ `${item.pinned? ' pinned ':' '}  post-list` }   >
                        < PostListItem  
                            {...item}
                            edit={edit}
                            deletePost={deletePost}
                            pinPost={pinPost} 
                            editPost={editPost}
                            editValue={editValue}
                            setEditValue={setEditValue}
                            savePost={savePost}
                            isLogIn={isLogIn}
                            data={data}
                             />
                    </div>
                    
                )
            })

    return(
        <div className='d-flex flex-column '>
                
                    {element.reverse()}
         
        </div>
    )
    
}