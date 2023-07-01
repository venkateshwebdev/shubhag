import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
export const Card = (props)=>{
    useEffect(()=>{
        Aos.init({duration:1000,easing:"ease-in-out"})
    },[])
    return(
        <div className="use-card" data-aos={props.anm}>
            <img src={props.src}/>
            <div className="use-card-title">{props.title}</div>
            <div className="use-card-des">{props.des}</div>
        </div>
    )
}

const data = [{src:"https://subhag.in/wp-content/uploads/2021/02/feature_vconcieve3.png",title:"Easy Insertion",des:"The cup of V-Conceive clutches the wall of the vagina on insertion and opens up at the top of the vagina near the cervix, filling the necessary space."},{src:"https://subhag.in/wp-content/uploads/2021/02/feature_vconcieve1.png",title:"Simple Yet Effective",des:"V-Conceive is soft, comfortable and easy to use. The cup will keep the sperm in place and is designed to fit one’s lifestyle."},{src:'https://subhag.in/wp-content/uploads/2021/02/feature_vconcieve2.png',title:"Smooth Removal",des:"The stem may extend beyond the length of the vagina or it may sit just inside making it easy to reach for smooth removal."}]
const UseCard = (props) => {
    return (
        <div className="use-main-container">
            <div className="use-card-container">
                {data.map((e,i)=><Card src={e.src} title={e.title} des={e.des} key={i} anm={"fade-up"}/>)}
            </div>
            {props.f&&<div className="featured-container">
                <div className="featured-title">As Featured In</div>
                <div className="featured-image animate">
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>
                    
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>
                    
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>

                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>

                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>

                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>

                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>

                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>

                    <img src={"https://subhag.in/wp-content/uploads/2023/06/5fcae8_fd972b74359844638fbd05a6303fa506mv2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/1200px-Yahoo_Finance_Logo_2019.svg-1-1024x520.png"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/navbharat-removebg-preview-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/subhag-healthtech-in-shark-tank-india-season-2.webp"}/>
                    <img src={"https://subhag.in/wp-content/uploads/2023/06/Social-Alpha-Logo-1.png"}/>
                    <img src={"	https://subhag.in/wp-content/uploads/2023/06/the-sunday-guardian-removebg-preview-1.png"}/>
                    
                </div>
            </div>}
        </div>
    );
}
 
export default UseCard;