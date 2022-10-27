import './index.css';
import Navbar from '../navbar';
import  Profile  from '../profile';
import Membership from '../membership';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import LoadingScreen from '../../atom/loadingScreen';

import HomeData from '../../assets/store/home';
import { useNavigate } from 'react-router-dom';
const Profilepage =(props)=>{
    const navigate =useNavigate();
    const[pageDisplay,setPageDisplay]=useState({
                                                profile:"flex",
                                                member:"none",

    })

    



    function reloader(){
        window.location.reload();
        navigate("/");

    }
    return(

        
        <div className='profilepage__outer'>
            <Navbar/>
            <div className='profilepage__inner'>
                <div className='profilepage__left'>
                    
                    <div className='profilepage__left__navigator'>
                        <div  className='profilepage__left__title'>
                            ACCOUNT
                        </div>
                        <div    onClick={()=>{setPageDisplay({profile:"flex",member:"none"})}}className='profilepage__left__navigator__ele'>
                            Profile
                        </div>
                        <div   onClick={()=>{setPageDisplay({profile:"none",member:"flex"})}} className='profilepage__left__navigator__ele'>
                            membership details
                        </div>
                        <div onClick={()=>{reloader()}}className='profilepage__left__navigator__ele'>
                            log-out
                        </div>
                    </div>
                </div>

                <div className='profilepage__right'>
                    <div className='profilepage__right__inner1' style={{display:pageDisplay.member}}>
                        <Membership loggedinstatus={props.loggedinstatus} />
                    </div>
                    <div className='profilepage__right__inner1' style={{display:pageDisplay.profile}}>
                        <Profile  loggedinstatus={props.loggedinstatus}/>
                    </div>
                    
                 
                </div>
            </div>
        </div>
    )
}
export default Profilepage;