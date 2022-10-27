import "./index.css";
import { useNavigate,Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';
import img from '../../assets/images/marriageimage3.jpg';
import Navbar from "../navbar";
const Login=(props)=>{
    const navigate=useNavigate();


    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [err,setErr]=useState("none");
    const [errmm,setErrmm]=useState("");
    function checker(){
        
      
        if(email==="" || email.indexOf("@")===-1){
            setErr("flex");
            setErrmm("Please enter your email correctly");
        }
        else if(pass==="" ){
            setErr("flex");
            setErrmm("Please enter your password correctly");
        }
        else{
            Axios.get('http://localhost:5000/login',
        {
            
            params:{
                email:email,
                password:pass
            }
           

        }).then((res)=>{
        if(res.data.length===1){
            props.changeLogin("true",email);
            navigate('/');
            console.log("logged in");
            
            
        }
        else{
            console.log("logged in failed");
        }
        })  
        }

    }
useEffect(()=>{
    setErr("none");
    setErrmm("")

},[email,pass]);
return(
    <>
    <div className="login__outer">
        <Navbar/>
        <div className="login__inner">
            <div className="login__inner__left">
                <div className="login__inner__left_inner">
                    <div className="login__inner__left__title">
                        Welcome back.
                    </div>
                    <div className="login__inner__left__signup">
                        Don't have an account?<div style={{color:"rgb(85, 85, 208)",cursor:"pointer"}} onClick={()=>navigate('/signup')}  >Sign-up</div>
                    </div>
                    <div className="login__inner__left__input">
                        <input onChange={(e)=>[setEmail(e.target.value)]} placeholder="Email" type="text" className="login__inner__left__input__field"/>
                    </div>
                    <div className="login__inner__left__input">
                    <input onChange={(e)=>[setPass(e.target.value)]} placeholder="Password" type="password" className="login__inner__left__input__field"/>
                    </div>
                    <div className="login__errormessage" style={{display:err}}>
                        {errmm}
                    </div>
                    <div onClick={()=>{checker()}} className="login__inner__left__button">
                        Sign in
                    </div>
                </div>
            </div>
            <div className="login__inner__right">
                <img className="login__inner__right__image" src={img}/>
            </div>
        </div>
    </div>
    </>
)
}

export default Login;