import './index.css';
import logo1 from '../../assets/images/logo1.png';
import {useNavigate} from "react-router-dom";
const Navbar=(props)=>{
    const navigate=useNavigate();
    function loginhandler(ele){
        if(props.loggedinstatus.login==="false" ){
            navigate("/login");
        }
        else{
            navigate(ele);
        }
    }
    return(
        <>
        <div className="navbar__outer">
            <div className="navbar__inner">
                <div   className="navbar__left">
                    <img onClick={()=>navigate("/")} className='navbar__left__logo' style={{backgroundColor:"white"}} src={logo1}/>
                </div>
                <div className="navbar__right">
                    {/* <div onClick={()=>loginhandler('/login')} className="navbar__right__title">
                        Login
                    </div> */}
                    <div onClick={()=>loginhandler('/matches')} className="navbar__right__title">
                        matches
                    </div>
                    <div  className="navbar__right__title">
                        messages
                    </div>
                    <div onClick={()=>loginhandler('/profilepage')} className="navbar__right__title">
                        profile
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar