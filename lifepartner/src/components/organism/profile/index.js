import './index.css';
// import Navbar from '../navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeData from '../../assets/store/home';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import LoadingScreen from '../../atom/loadingScreen';
import horoscope from '../../assets/images/horoscope.png';
import horoscope2 from '../../assets/images/horoscope2.png';

const Profile = (props) => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [bdate, setBdate] = useState("");
    // const [mno, setMno] = useState(0);
    // const [gender, setGender] = useState("");
    // const [country, setCountry] = useState("");
    // const [address, setAddress] = useState("");
    // const [distate, setDistate] = useState("none");
    // const [states, setStates] = useState("");
    // const [religion, setReligion] = useState("");
    // const [lang, setLang] = useState("");
    // const [height, setHeight] = useState(0);
    // const [edu, setEdu] = useState("");
    // const [ocu, setOcu] = useState("");
    // const [sallary, setSallary] = useState(0);
    // const [marstat, setMarstat] = useState(0);
    // const [pack, setPack] = useState(1);
    // const [flag, setFlag] = useState(1);
    // const [image, setImage] = useState("");
    const [age, setAge] = useState(0);
    const [about, setAbout] = useState("Nothing to say");
    const [marstat, setMarstat] = useState("never married");

    const [profileAllData, setProfileAllData] = useState({});
    const [profileLoading, setProfileLoading] = useState(true);

    function calculate(x) {
        if(x==1){
        var str = parseInt(profileAllData.birthdate.slice(0, 4));
        var ele=2022-str;
        return ele;
        }
        else{
            if (profileAllData.about.length > 0) {
            return profileAllData.about;
        }
    }
        
    }



    useEffect(() => {
        Axios.get('http://localhost:5000/profilepage/get-data',
            {
                params: {
                    email: props.loggedinstatus.email.toString(),
                }

            }).then((res) => {
                setProfileAllData(res.data[0]);
                setProfileLoading(false);
            
            })

    }, []);



    return (
        <>
            <div className='profile__outer'>

                <div className='profile__inner'>


                    {/* <div style={{display:erm}} className='home__search__error'>
                                {errormessage}
                            </div> */}
                    {
                        profileLoading ? (

                            <div className='loading__outer'>
                                <LoadingScreen />
                            </div>

                        ) : (
                            <>
                                <div className='profile__left'>
                                    <div className='profile__left__profile'>
                                        Your Profile
                                    </div>
                                    <div className='profile__left__title'>
                                        <div className='profile__left__title__left'>
                                            <img className='profile__left__image' src={require('./../../assets/profileimage/'+profileAllData.image)} />
                                        </div>
                                        <div className='profile__left__title__right'>
                                            {/* <div className='profile__title'> */}
                                            <div className='profile__title__ele'>
                                                Name : {profileAllData.name}
                                            </div>
                                            <div className='profile__title__ele'>
                                                Age : {calculate(1)}
                                            </div>
                                            <div className='profile__title__ele'>
                                                email : {profileAllData.email}
                                            </div>
                                            <div className='profile__title__ele'>
                                                birthdate : {profileAllData.birthdate}
                                            </div>
                                            <div className='profile__title__ele'>
                                                contact : {profileAllData.mno}
                                            </div>
                                            <div className='profile__title__ele'>
                                                gender : {profileAllData.gender}
                                            </div>
                                            <div className='profile__title__ele'>
                                                address : {profileAllData.address}
                                            </div>
                                            <div className='profile__title__ele'>
                                                state/country : {profileAllData.state}/{profileAllData.country}
                                            </div>

                                            {/* </div> */}

                                        </div>
                                    </div>
                                    <div className='profile__left__mid'>
                                        <div className='profile__left__mid__title'>
                                            About
                                        </div>
                                        <div className='profile__left__mid__content'>
                                            {calculate(0)}
                                        </div>
                                    </div>
                                    <div className='profile__left__mid2'>
                                        <div className='profile__left__mid__title'>
                                            Basic Information
                                        </div>
                                        <div className='profile__left__mid2__content'>
                                            <div className='profile__left__mid2__right' >
                                                <div className='profile__title__ele'>
                                                    Gradution : {profileAllData.edu}
                                                </div>
                                                <div className='profile__title__ele'>
                                                    Occupation : {profileAllData.occu}
                                                </div>
                                                <div className='profile__title__ele'>
                                                    Sallary PA : {profileAllData.sallary} Lac
                                                </div>
                                            </div>
                                            <div className='profile__left__mid2__right'>
                                                <div className='profile__title__ele'>
                                                    height : {profileAllData.height} cm
                                                </div>
                                                {
                                                    profileAllData.marstat==="0" ? (

                                                        <div className='profile__title__ele'>
                                                        marriage status : never-Married
                                                    </div>

                                                    ) : (
                                                        <div className='profile__title__ele'>
                                                        marriage status : Divorced
                                                    </div>
                                                    )
                                                }
                                                
                                                <div className='profile__title__ele'>
                                                    hobbies : {profileAllData.hobby}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile__left__mid' >
                                        <div className='profile__left__mid__title'>
                                            Religion
                                        </div>
                                        <div className='profile__left__mid3__sections'>
                                            <div className='profile__left__mid3__ele'>
                                                religion : {profileAllData.religion}
                                            </div>
                                            <div className='profile__left__mid3__ele'>
                                                mother tongue : {profileAllData.language}
                                            </div>
                                            <div className='profile__left__mid3__ele'>
                                                zodiac sign : {profileAllData.zodiac}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className='profile__right'>
                                    <div className='profile__right__sec1'>
                                        <img src={horoscope} className="profile__right__image" />
                                        <div className='profile__right__title'>
                                            Your Daily Horoscope
                                        </div>
                                        <div className='profile__right__content'>
                                            Legal matters may be on your mind today, Pisces. Maybe your insecurities are blowing a certain difficulty all out of proportion. You need to view the entire situation a little more objectively. If you can find someone in the know, ask him or her to fill you in on the facts. You will be relieved to know you've been making mountains out of molehills. For now, try to relax and lighten up a little.
                                        </div>
                                        <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", justifyContent: "flex-start", width: "90%", }}>
                                            Lucky color : emerald green
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "90%", marginTop: "0.5rem" }}>
                                            Lucky number : 34
                                        </div>
                                    </div>
                                    <div className='profile__right__sec2'>
                                    <img src={horoscope2} className="profile__right__image" />
                                    <div  style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", justifyContent: "flex-start", width: "90%", }}>
                                        Your compatability with Pisces
                                    </div>
                                    </div>

                                </div>
                            </>
                        )
                    }


                </div>
            </div>
        </>
    )
}
export default Profile;