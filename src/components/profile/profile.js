import React,{useEffect,  useState} from 'react';
import './profile.scss';
import  Loading from '../loading';
export default function Profile({isLogIn}) {

const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const fetchUser = async () => {
    await fetch("https://reqres.in/api/users/10")
    .then(res =>  res.json())
     .then(
         (result) => {
         setIsLoaded(true);
           setItems(result);
         },
    
         (error) => {
          setIsLoaded(true);
           setError(error);
         }
       )  
  };
 
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(items.data);



  let {
     email, first_name, last_name, avatar
    
  }=items.data ||{};
  



    const renderProfile=()=>{
      
        if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div><Loading/></div>;
  } else {
    return (
       <div className="d-flex flex-column  text-center">
         {/* <img src={avatar} alt="avatar" />  */}
         <p>{` Name: ${first_name} ${last_name}`}</p>
         <p>{`Email: ${email}`}</p>
         
        
          
        
      </div>     
    );
  }
    }
  



    
    if (isLogIn){
        return (
            <div className='profile'>
                {renderProfile()}
            </div>
        )
    }else return <p>Please LogIn</p>
   
}