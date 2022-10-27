import { useState } from 'react';
import './index.css';
const SearchCard1=(props)=>{

    const [request,setRequest]=useState("request");
    console.log(props.image)

    function marstathandler(ele){
        var str="divorced"
        if(ele=="1"){
            return str;
        }
        else{
            str="never married"
            return str;
        }
    }
    return (
        <>
        <div className='searchcard__outer'>
            <div className='searchcard__inner'>
                <div className='searchcard__inner__left'>
                <img src={require('./../../assets/profileimage/'+props.image)} style={{width:"20rem",height:"20rem"}}/>
                </div>
                <div className='searchcard__inner__right'>
                    <div className='searchcard__inner__right__title'>
                        {props.title}
                    </div>
                    <div className='searchcard__inner__right__details'>
                        <div className='searchcard__inner__right__details_inner'>
                            <div className='searchcard__inner__right__details_inner__ele'>
                                {props.birthdate}{'\u00A0'},{'\u00A0'}{props.height}cms
                            </div>
                            
                            <div className='searchcard__inner__right__details_inner__ele'>
                                {props.country}{'\u00A0'},{'\u00A0'}{props.states}
                            </div>
                            <div className='searchcard__inner__right__details_inner__ele'>
                                {props.language}{'\u00A0'},{'\u00A0'}{props.religion}
                            </div>
                            <div className='searchcard__inner__right__details_inner__ele'>
                                {marstathandler(props.marstat)}
                            </div>
                            <div className='searchcard__inner__right__details_inner__ele'>
                                <div className='searchcard__inner__right__details_inner__ele__button' onClick={()=>{setRequest("requested")}}>
                                  {request}
                                </div>
                            </div>
                        </div>
                        <div className='searchcard__inner__right__details_inner'>
                            <div className='searchcard__inner__right__details_inner__ele'>
                                {props.edu}
                            </div>
                            
                            <div className='searchcard__inner__right__details_inner__ele'>
                                {props.occu}
                            </div>
                            <div className='searchcard__inner__right__details_inner__ele'>
                                {props.sallary}P/A
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SearchCard1;