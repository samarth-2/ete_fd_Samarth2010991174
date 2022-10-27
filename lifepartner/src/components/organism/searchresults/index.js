import './index.css';
import * as React from 'react';
import Navbar from './../navbar';
import Searchicon from '@material-ui/icons/Search'
// import ToggleButton from '@material-ui/lab/ToggleButton';
// import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Slider from '@material-ui/core/Slider';
import Slider from '@mui/material/Slider';
// import HomeData from './../../assets/store/homeData';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { useState,useEffect } from 'react';
import LoadingScreen from './../../atom/loadingScreen';
import Axios from 'axios';
import SearchCard1 from '../../atom/searchCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeData from '../../assets/store/home';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchData from '../../assets/store/searchData';
import { red } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





const Searchresults = (props) => {

    const [dataAll,setDataAll]=useState([]);
    const [datares,setDatares]=useState([]);
    const [height, setHeight] = useState([170, 190]);
    const [age, setAge] = useState(23);
    const [state, setState] = useState(props.location);
    const [gender, setGender] = useState(props.gender);
    const[dataLoading,setDataLoading]=useState(true)


    const [valueAge, setValueAge] = React.useState([18, 50]);
    const [valueHeight, setValueHeight] = React.useState([150,220]);
    const [country,setCountry]=useState("All")
    const [region,setRegion]=useState("All")
    const [valueSalary, setValueSalary] = React.useState([1,50]);
    const [zodiac,setZodiac]=useState("All")
    const [religion,setReligion]=useState("All")
    const [lang,setLang]=useState("All")


    const [matsat,setMatSat]=useState("All")


    useEffect(() => {
        Axios.get('http://localhost:5000/searchresults',
        {
            params:{
                gender:"female"
            }
        }).then((res)=>{
            setDatares(res.data);
            setDataAll(res.data);
            setDataLoading(false)
        }) 
    }, []);


    function valuetext(value) {
        return `${value}`;
    }










    const handleAge = (event, newValue) => {
        setAge(newValue);
    }
    const handleHeight = (event, newValue) => {
        setHeight(newValue);
    }
    const handleState = (event, newValue) => {
        setState(newValue);
    }
    const handleGender = (event, newValue) => {
        setGender(newValue);
    }
    
    
    
     function filetrDate()
     {
        setDataLoading(true);
        var li1=[];
        for(var i=0;i<dataAll.length;i++)
        {
            var str = parseInt(dataAll[i].birthdate.slice(0, 4));
            var ele=2022-str;
            if(ele>=valueAge[0] && ele<=valueAge[1])
            {
                li1.push(dataAll[i])
            }
        }


        var li2=[];
        for(var i=0;i<dataAll.length;i++)
        {
            var ele=parseInt(dataAll[i].height);
            if(ele>=valueHeight[0] && ele<=valueHeight[1])
            {
                li2.push(dataAll[i])
            }
        }
        setDatares(li2)



        var li3=[];
        if(country==="All")
        {
            li3=dataAll;
        }
        else
        {
            for(var i=0;i<dataAll.length;i++)
            {
                if(dataAll[i].country===country)
                {
                    li3.push(dataAll[i])
                }
            }
        }



        var li4=[];
        if(region==="All")
        {
            li4=dataAll;
        }
        else
        {
            for(var i=0;i<dataAll.length;i++)
            {
                if(dataAll[i].state===region)
                {
                    li4.push(dataAll[i])
                }
            }
        }

        var li5=[];
        for(var i=0;i<dataAll.length;i++)
        {
            var ele=dataAll[i].sallary;
            if(ele>=valueSalary[0] && ele<=valueSalary[1])
            {
                li5.push(dataAll[i])
            }
        }



        var li6=[];
        if(religion==="All")
        {
            li6=dataAll;
        }
        else
        {
            for(var i=0;i<dataAll.length;i++)
            {
                if(dataAll[i].religion===religion)
                {
                    li6.push(dataAll[i])
                }
            }
        }



        var li7=[];
        if(zodiac==="All")
        {
            li7=dataAll;
        }
        else
        {
            for(var i=0;i<dataAll.length;i++)
            {
                if(dataAll[i].zodiac===zodiac)
                {
                    li7.push(dataAll[i])
                }
            }
        }

        var li8=[];
        if(lang==="All")
        {
            li8=dataAll;
        }
        else
        {
            for(var i=0;i<dataAll.length;i++)
            {
                if(dataAll[i].language===lang)
                {
                    li8.push(dataAll[i])
                }
            }
        }


        var li9=[]
        if(matsat==="Never Married")
        {
            for(var i=0;i<dataAll.length;i++)
            {
                if(dataAll[i].marstat==="0" || dataAll[i].marstat==="unmarried")
                {
                    li9.push(dataAll[i])
                }
            } 
        }
        else if(matsat==="Divorced")
        {
            for(var i=0;i<dataAll.length;i++)
            {
                if(dataAll[i].marstat==="1")
                {
                    li9.push(dataAll[i])
                }
            } 
        }
        else if(matsat==="All")
        {   
            li9=dataAll;
        }


        
        function intersection() {
            var result = [];
            var lists;
        
            if(arguments.length === 1) {
            lists = arguments[0];
            } else {
            lists = arguments;
            }
        
            for(var i = 0; i < lists.length; i++) {
            var currentList = lists[i];
            for(var y = 0; y < currentList.length; y++) {
                var currentValue = currentList[y];
                if(result.indexOf(currentValue) === -1) {
                var existsInAll = true;
                for(var x = 0; x < lists.length; x++) {
                    if(lists[x].indexOf(currentValue) === -1) {
                    existsInAll = false;
                    break;
                    }
                }
                if(existsInAll) {
                    result.push(currentValue);
                }
                }
            }
            }
            return result;
        }
        var check=intersection(li1,li2,li3,li4,li5,li6,li7,li8,li9);
        // console.log("price",li1)
        // console.log("bhk",li2)
        // console.log("construction",li3)
        // console.log("property",li4)
        // console.log("verefied",li5)
        // console.log("furnished",li6)

        // console.log("high",li7)
        // console.log("recommended",li8)
        // console.log("area",li9)
        setDatares(check);
        setDataLoading(false)
     }
    



















    return (

        <div className='searchresult__outer'>
            <Navbar />
           
            <div className='searchpage__inner'>
                <div className='searchpage__inner__left'>
                    <div className='searchpage__inner__left__up'>

                        
                        <div className='filter__each'>
                            <div className='home__inner__seaction2__inner__bottom__under__all__head'>
                                Age
                            </div>  
                            <div className='home__inner__seaction2__inner__bottom__under__all__value'>
                                {valueAge[0]}{'\u00A0'}  - {'\u00A0'} {valueAge[1]}
                            </div>
                            <div className='filter__each__slider'  style={{width:"60%"}}>
                                <Slider
                                    value={valueAge}
                                    onChange={(e)=>{setValueAge(e.target.value)}}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    min={18}
                                    max={50}
                                />
                            </div>
                        </div>

                        <div className='filter__each'>
                            <div className='home__inner__seaction2__inner__bottom__under__all__head'>
                                Height
                            </div>  
                            <div className='home__inner__seaction2__inner__bottom__under__all__value'>
                                {valueHeight[0]}{'\u00A0'}cm - {'\u00A0'} {valueHeight[1]}{'\u00A0'} cm
                            </div>
                            <div className='filter__each__slider'  style={{width:"60%"}}>
                                <Slider
                                    value={valueHeight}
                                    onChange={(e)=>{setValueHeight(e.target.value)}}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    min={150}
                                    max={220}
                                />
                            </div>
                        </div>

                        
                        <div className="name-outer">
                            <div className="name-label">
                                Country{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                            </div>
                            <Autocomplete
                            disablePortal
                            defaultValue={null}
                            className="name-field"
                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px",width:"100%"}}
                            id="combo-box-demo"
                            placeholder={"Country"}
                            options={SearchData.countryData}
                            value={country}
                            onChange={(event: any, newVal:string | null)=>setCountry(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            />
                            
                        </div>

                        <div className="name-outer">
                            <div className="name-label">
                                State{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                            </div>
                            <Autocomplete
                            disablePortal
                            defaultValue={null}
                            className="name-field"
                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px",width:"100%"}}
                            id="combo-box-demo"
                            placeholder={"Country"}
                            options={SearchData.regionData}
                            value={region}
                            onChange={(event: any, newVal:string | null)=>setRegion(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            />
                            
                        </div>

                        <div className='filter__each'>
                            <div className='home__inner__seaction2__inner__bottom__under__all__head'>
                                Salary
                            </div>  
                            <div className='home__inner__seaction2__inner__bottom__under__all__value'>
                                {valueSalary[0]}{'\u00A0'}Lacs  - {'\u00A0'} {valueSalary[1]}{'\u00A0'}Lacs
                            </div>
                            <div className='filter__each__slider'  style={{width:"60%"}}>
                                <Slider
                                    value={valueSalary}
                                    onChange={(e)=>{setValueSalary(e.target.value)}}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    min={1}
                                    max={50}
                                />
                            </div>
                        </div>

                        <div className="name-outer">
                            <div className="name-label">
                                Religion{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                            </div>
                            <Autocomplete
                            disablePortal
                            defaultValue={null}
                            className="name-field"
                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px",width:"100%"}}
                            id="combo-box-demo"
                            placeholder={"Country"}
                            options={SearchData.religionData}
                            value={religion}
                            onChange={(event: any, newVal:string | null)=>setReligion(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            />
                            
                        </div>

                        <div className="name-outer">
                            <div className="name-label">
                                Zodiac Sign{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                            </div>
                            <Autocomplete
                            disablePortal
                            defaultValue={null}
                            className="name-field"
                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px",width:"100%"}}
                            id="combo-box-demo"
                            placeholder={"Country"}
                            options={SearchData.zodiacData}
                            value={zodiac}
                            onChange={(event: any, newVal:string | null)=>setZodiac(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            />
                            
                        </div>


                        <div className="name-outer">
                            <div className="name-label">
                                Language{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                            </div>
                            <Autocomplete
                            disablePortal
                            defaultValue={null}
                            className="name-field"
                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px",width:"100%"}}
                            id="combo-box-demo"
                            placeholder={"Country"}
                            options={SearchData.langData}
                            value={lang}
                            onChange={(event: any, newVal:string | null)=>setLang(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            />
                            
                        </div>

                        <div className="name-outer">
                            <div className="name-label">
                                Marital Status{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                            </div>
                            <Autocomplete
                            disablePortal
                            defaultValue={null}
                            className="name-field"
                            style={{height:"fit-content",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px",width:"100%"}}
                            id="combo-box-demo"
                            placeholder={"Marital Stats"}
                            options={SearchData.maritalStats}
                            value={matsat}
                            onChange={(event: any, newVal:string | null)=>setMatSat(newVal.label)}
                            renderInput={(params) => <TextField {...params} label="" />}
                            />
                            
                        </div>
                        
                    </div>
                    <div className='searchpage__inner__left__down' onClick={()=>{filetrDate()}}>
                        Filter
                    </div>
                </div>
                <div className='searchpage__inner__right'>
                {
                    dataLoading ? (

                    <div className='loading__outer'>
                        <LoadingScreen/>    
                    </div>
                        
                    ):(
                        datares.map((ele)=>{
                            const{id,name,image,birthdate,height,state,country,language,religion,edu,occu,sallary,marstat}=ele;
                            return (
                                <SearchCard1 image={image} title={name} birthdate={birthdate} height={height} country={country} states={state} religion={religion} 
                                language={language} edu={edu} occu={occu} sallary={sallary}   marstat={marstat}     />
                            ) 
                        })
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Searchresults;






















