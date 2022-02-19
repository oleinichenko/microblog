import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import Header from '../header';
import PostAdd from '../post-add';
import PostList from '../post-list';
import Loading from '../loading';
import Profile from '../profile';


import { Route,Routes, BrowserRouter as Router } from "react-router-dom";


function App() {
  
  
  
  const [error, setError] = useState(null);
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [isLogIn, setIsLogIn] =useState(false);
  const [filtered, setFiltered] = useState([]);

   const search = val => {
    console.log(data);
    let currentData = [],
      newList = [];
    if (val !== "") {
      
      currentData = data;
    
      newList = currentData.filter(item => {
       
        const lc = item.post.toLowerCase();
        const filter = val.toLowerCase();
       
        return lc.includes(filter);
      });
    } else {
     
      newList = data;
    }
    
    setFiltered(newList);
  };

  const logIn=()=>{
    setIsLogIn(isLogIn=>!isLogIn);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          
          setData(prev=>[...result]
                  .splice(0,10)
                  .map((item) => ({
                      id:item.id,
                      post: item.title.slice(0,100),
                      pinned:false
                         })
                      )
                );
          
          
        },
       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
     
  }, [])
  
   useEffect(
    _ => {
      setFiltered(data);
      
    },
    [data]
  );
  
 

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading  />;
  } else {
    return (
      <Router basename="/microblog/">
        <div className="App">
            <Header logIn={logIn} isLogIn={isLogIn} search= { search }/>
              
            <div className="container ">
              <div className="row">
                  <div className="col-md-4 pb-5">
                 
                  <Routes>
                      <Route path='/profile' element={<Profile isLogIn={isLogIn} />}/>
                  </Routes>
                </div>
                  
                <div className="col-md-8   ">
                    <PostAdd setData={setData}  data={data}  isLogIn={isLogIn}/>
                    <PostList data={filtered} setData={setFiltered}  isLogIn={isLogIn} />
                </div>
              </div>
              
                
            </div>
              
        </div>
      </Router>
    );
  }
}

export default App;
