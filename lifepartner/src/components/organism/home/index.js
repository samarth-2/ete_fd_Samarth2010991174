import './index.css';
import Navbar from '../navbar';
import Carousel from 'react-multi-carousel';
import HomeData from '../../assets/store/home';
import home_profile from '../../assets/images/home/profile.png';
import home_search from "../../assets/images/home/search.png";
import home_match from "../../assets/images/home/macth.png";
import { useNavigate } from 'react-router-dom';
import Searchresults from '../searchresults';
import Male from "../../assets/store/male";
import React from 'react';
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import Footer from '../footer';
import HomeCarousel from '../../molecule/homecarousel';
import { useState,useEffect} from 'react';
import { Axios } from 'axios';





const Home = (props) => {
    
    


    const [erm,setErm]=useState("none");
    const [errormessage,setErrormessage]=useState("");
    const [gender,setGender]=useState("");
    const [ageup,setAgeup]=useState(0);
    const [agedown,setAgedown]=useState(0);
    const [location,setLocation]=useState("");
    const [religion,setReligion]=useState("");
    const [display,setDisplay]=useState({
        male:"",
        female:"",
        textmale:"white",
        textfemale:"white"
    });
    const navigate=useNavigate();

    function dis(ele){
        if(ele=="male"){
            setDisplay({
                male:"orange",
                female:"",
                textmale:"black",
                textfemale:"white"
            })
        }
        else if(ele=="female"){
            setDisplay({
                female:"orange",
                male:"",
                textmale:"white",
                textfemale:"black"
            })
    }
    }

    const searcher =()=>{
        if(props.loggedinstatus.login==="false"){
            navigate('/login');
        }
        else{

            if(gender===""){
            setErm("flex");
            setErrormessage("Please fill gender correctly");
            }
            else if(location===""){
                setErm("flex");
                setErrormessage("Please fill location correctly");
            }
            else if(ageup<=0 || agedown<=0 || ageup>=agedown || ageup<18 || agedown<18){
                setErm("flex");
                setErrormessage("Please fill age correctly");
            }
            else if(religion===""){
                setErm("flex");
                setErrormessage("Please fill religion correctly");
            }
            
            else{
                setErm("none");
                navigate("/searchresults");
            }
        }
        
        

    }


    useEffect(()=>{
        setErm("none");
        setErrormessage("")
    
    },[gender,ageup,agedown,religion,location]);


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 750 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <>
            <div className='home__outer'>
            <Navbar loggedinstatus={props.loggedinstatus}  changeLogin={props.changeLogin} />
                <div className='home__inner'>
                    
                    <div className='home__sec1'>
                        <div className="home__sec1__search">
                            <div style={{ fontSize: "2rem", marginTop: "1rem", marginBottom: "1rem" }}>
                                meet your better half today
                            </div>
                            <div className="home__sec1__search__inner">

                                <div className="home__sec1__search__gender">

                                    <div className='search__gender__outer'>
                                        <div className='search__gender__title'>
                                            Looking for:
                                        </div>
                                        <div className='search__gender'>
                                            <div onClick={(e)=>[setGender("female"),dis("male")]} style={{backgroundColor:display.male,color:display.textmale}} className='search__gender__option__left'>
                                                Bride
                                            </div>
                                            <div onClick={(e)=>[setGender("male"),dis("female")]} style={{backgroundColor:display.female,color:display.textfemale}} className='search__gender__option__right'>
                                                Groom
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="home__search__location">
                                    <div className="home__search__location__title">
                                        Located in:
                                    </div>
                                    <div className="home__search__location__option">
                                        <form>
                                            <select onChange={(e)=>[setLocation(e.target.value)]}>

                                                {HomeData.regionData.map((ele) => {

                                                    return (
                                                        <>
                                                            <option value={ele.title} key={ele.id}>
                                                                {ele.title}
                                                            </option>
                                                        </>
                                                    )
                                                })}
                                            </select>
                                        </form>
                                    </div>
                                </div>

                                <div className="home__search__age">
                                    <div className='home__search__age__title'>
                                        Age Group:
                                    </div>
                                    <div className='home__search__age__options'>
                                        <input  onChange={(e)=>{setAgeup(e.target.value)}} className='home__search__age__input' type="number" placeHolder="20" />
                                        <div>
                                            To
                                        </div>
                                        <input onChange={(e)=>{setAgedown(e.target.value)}} type="number" placeHolder="30" className='home__search__age__input' />
                                    </div>

                                </div>

                                <div className="home__search__location">
                                    <div className="home__search__location__title">
                                        Religion:
                                    </div>
                                    <div className="home__search__location__option">
                                        <form>
                                            <select onChange={(e)=>[setReligion(e.target.value)]}>

                                                {HomeData.religionData.map((ele) => {

                                                    return (
                                                        <>
                                                            <option value={ele.title} key={ele.id}>
                                                                {ele.title}
                                                            </option>
                                                        </>
                                                    )
                                                })}
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:erm}} className='home__search__error'>
                                {errormessage}
                            </div>
                            <div onClick={()=>{searcher()}} className='home__search__submit'>SUBMIT</div>
                        </div>
                        

                    </div>
                    <div className='home__sec2'>
                            <div style={{fontSize:"2.5rem",color:"#FF5A60"}}>
                            Find your Special Someone
                            </div>
                            <div className='home__sec2__inner'>
                                <div className='home__sec2__card'>
                                    <img className='home__sec2__card__img' src={home_profile}/>
                                    <div style={{fontSize:"2rem",color:"blue"}}>
                                        Sign up
                                    </div>
                                    <div style={{fontSize:"1.5rem",color:"grey",textAlign:"center"}}>
                                    Register for free & put up your Matrimony Profile
                                    </div>
                                </div>

                                <div className='home__sec2__card'>
                                    <img className='home__sec2__card__img' src={home_search}/>
                                    <div style={{fontSize:"2rem",color:"blue"}}>
                                       Connect
                                    </div>
                                    <div style={{fontSize:"1.5rem",color:"grey",textAlign:"center"}}>
                                    Select & Connect with Matches you like
                                    </div>
                                </div>

                                <div className='home__sec2__card'>
                                    <img className='home__sec2__card__img' src={home_match}/>
                                    <div style={{fontSize:"2rem",color:"blue"}}>
                                    Interact
                                    </div>
                                    <div style={{fontSize:"1.5rem",color:"grey",textAlign:"center"}}>
                                    Become a Premium Member & Start a Conversation
                                    </div>
                                </div>

                            </div>
                    </div>

                    <div className='home__sec3'>
                        <Carousel
                        responsive={responsive} 
                        draggable
                        autoPlay
                        autoPlaySpeed={2000}
                        infinite
                        showDots={true}
                        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                            {HomeData.carouselData.map((ele)=>{
                                const{id,title,img,content}=ele;
                                return(
                                    <HomeCarousel id={id} img={img} content={content} title={title}/>
                                )
                                })}
                        </Carousel>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default Home;

