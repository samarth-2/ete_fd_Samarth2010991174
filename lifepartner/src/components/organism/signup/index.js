import Navbar from '../navbar';
import Footer from '../footer';
import './index.css';
import HomeData from '../../assets/store/home';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from '../../assets/images/signup_background.jpg';
import Axios from 'axios';


const Signup = (props) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bdate, setBdate] = useState("");
    const [mno, setMno] = useState(0);
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [distate, setDistate] = useState("none");
    const [states, setStates] = useState("");
    const [religion, setReligion] = useState("");
    const [lang, setLang] = useState("");
    const [height, setHeight] = useState(0);
    const [edu, setEdu] = useState("");
    const [ocu, setOcu] = useState("");
    const [sallary, setSallary] = useState(0);
    const [marstat, setMarstat] = useState(0);
    const [pack, setPack] = useState(1);
    const [flag, setFlag] = useState(1);
    const [image, setImage] = useState("");
    const [zodiac, setZodiac] = useState("");
    const [hobby, setHobby] = useState("");
    const [about, setAbout] = useState("");
    // const [profileAllData,setProfileAllData]=useState();
    // const[profileLoading,setProfileLoading]=useState(true);




    function displaystate(ele) {
        if (ele === "India") {
            setDistate("flex");
        }
        else {
            setDistate("none");
            setStates("none");
        }
        setCountry(ele);
    }

    function checker() {
        
        var s =image.split('\i');
        console.log(s);
        var x='i'+s[1];
        console.log(x);
        Axios.post('http://localhost:5000/signup',
            {
                name: name,
                email: email,
                password: password,
                gender: gender,
                birthdate: bdate,
                mno: mno,
                religion: religion,
                country: country,
                state: states,
                language: lang,
                address: address,
                height: height,
                edu: edu,
                occu: ocu,
                sallary: sallary,
                marstat: marstat,
                image: x,
                pack: pack,
                flag: flag,
                zodiac: zodiac,
                hobby: hobby,
                about: about,

            }).then(() => {
                navigate("/");
                props.changeLogin("true", email);
            })
    }

    return (





        <div className='signup__outer'>
            <Navbar />
            <div className='signup__outer__inner'>
                
                <div className='signup__inner'>

                    <div className='signup__title'>
                        TELL US ABOUT YOURSELF
                    </div>


                    <>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Name:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setName(e.target.value)]} className='signup__inputfield' type="text" />
                                <div className='signup__inner__fname__right__displayer'>

                                </div>
                            </div>
                        </div>

                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Email:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setEmail(e.target.value)]} className='signup__inputfield' type="text" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Password:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setPassword(e.target.value)]} className='signup__inputfield' type="password" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Birth Date:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setBdate(e.target.value)]} className='form-control' type="date" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Gender:
                            </div>
                            <div className="signup__inner__fname__right" style={{ justifyContent: "space-between" }}>
                                <div>Male</div>
                                <input onClick={(e) => [setGender("male")]} name='gender' value='male' className="form-check-input" type="radio" />
                                <div>Female</div>
                                <input onClick={(e) => [setGender("female")]} name='gender' value='female' className="form-check-input" type="radio" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Mobile No:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setMno(e.target.value)]} className='signup__inputfield' type="number" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Country:
                            </div>
                            <div className="signup__inner__fname__right">
                                <form>
                                    <select onChange={(e) => displaystate(e.target.value)}>

                                        {HomeData.countryData.map((ele) => {

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
                        <div style={{ display: distate }} className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                State:
                            </div>
                            <div className="signup__inner__fname__right">
                                <form>
                                    <select onChange={(e) => [setStates(e.target.value)]}>

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
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Address:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setAddress(e.target.value)]} className='signup__inputfield' type="text" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Marriage status:
                            </div>
                            <div className="signup__inner__fname__right" style={{ justifyContent: "space-between" }}>
                                <div>Unmarried</div>
                                <input onClick={(e) => [setMarstat("unmarried")]} name='marriage' value='unmarried' checked className="form-check-input" type="radio" />
                                <div>Divorced</div>
                                <input onClick={(e) => [setMarstat("divorced")]} name='marriage' value='divorced' className="form-check-input" type="radio" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Religion:
                            </div>
                            <div className="signup__inner__fname__right">
                                <form>
                                    <select onChange={(e) => [setReligion(e.target.value)]}>

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
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Language:
                            </div>
                            <div className="signup__inner__fname__right">
                                <form>
                                    <select onChange={(e) => [setLang(e.target.value)]}>

                                        {HomeData.langData.map((ele) => {

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
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                height:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setHeight(e.target.value)]} className='signup__inputfield' type="number" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Education:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setEdu(e.target.value)]} className='signup__inputfield' type="text" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Occupation:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setOcu(e.target.value)]} className='signup__inputfield' type="text" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                Sallary P.A. :
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setSallary(e.target.value)]} className='signup__inputfield' type="text" />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                image:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setImage(e.target.value)]} className='form-control' type="file" accept='image/*' />
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                zodiac sign:
                            </div>
                            <div className="signup__inner__fname__right">
                                <form>
                                    <select onChange={(e) => [setZodiac(e.target.value)]}>

                                        {HomeData.zodiacData.map((ele) => {

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
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                hobbies:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setHobby(e.target.value)]} className='signup__inputfield' type="text" />
                                <div className='signup__inner__fname__right__displayer'>

                                </div>
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div className="signup__inner__fname__left" >
                                tell us about yourself:
                            </div>
                            <div className="signup__inner__fname__right">
                                <input onChange={(e) => [setAbout(e.target.value)]} className='signup__inputfield' type="text" />
                                <div className='signup__inner__fname__right__displayer'>

                                </div>
                            </div>
                        </div>
                        <div className="signup__inner__fname">
                            <div onClick={() => { checker() }} className="signup__inner__submit" >
                                SUBMIT
                            </div>

                        </div>
                    </>


                </div>
                
            </div>
            <Footer/>

        </div>
    )
}

export default Signup;