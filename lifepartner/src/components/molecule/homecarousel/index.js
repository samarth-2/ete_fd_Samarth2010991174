import "./index.css";
const HomeCarousel=(props)=>{
    return(
        <div className="homecarousel__outer">
            <div className="homecarousel__outer__title">
                {props.title}
            </div>
            <div  >
                <img className="homecarousel__outer__image" src={props.img}/>
            </div>
            <div className="homecarousel__outer__content">
                {props.content}
            </div>
        </div>
    )
}

export default HomeCarousel;