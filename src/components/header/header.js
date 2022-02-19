import SearchPanel from '../search-panel';
import './header.scss';
import {Link} from "react-router-dom";
import React, {useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {MdLogout, MdLogin} from  "react-icons/md"
export default function Header({isLogIn, logIn, search}) {
    
    
    const [showSP, setshowSP]=useState(false);
    const onShowSP=()=>{
        setshowSP(showSP=>!showSP);
    }

    return(
        <header className="d-flex  justify-content-around">
            <div className="col-3" ><Link to='/' style={{ textDecoration: 'none' }}><h1>MicroBlog</h1></Link> 
            </div>    
            
            <div className=" col-6 justify-content-between d-flex ">
                <div>
                    {showSP? <SearchPanel {...{ search }}/>:null }
                </div>
                 <div className='cursor' onClick={onShowSP}>
                    <BsSearch  size={36}/>
                </div>

               

                 <Link to='/profile'>
                        {isLogIn? <button className='btn-style'>PROFILE</button>:null}
                </Link>
                 <Link to='/'>
                        {isLogIn? null: <button className='btn-style' onClick={logIn}>LogIn <MdLogin/></button>}
                </Link>
                <Link to='/'>
                        {isLogIn? <button className='btn-style' onClick={logIn}>LogOut <MdLogout/></button>:null}
                </Link>
                  
            </div>       
        </header>
    )
    
}