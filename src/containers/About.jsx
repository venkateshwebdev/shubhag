import { Card } from "./UseCard";
import Home from '../utils/icons8-home-50.png'
import Scope from "../utils/stethoscope-clipart-transparent-background-13.png"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import StetchIcon from "../utils/icons/Steth";
import HomeIcon from "../utils/icons/HomeIcon";
import Heart from "../utils/icons/Heart";
const About = () => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:"ease-in-out"})
    },[])
    return (
        <div className="about-container">
            <div className="about-title">WHAT IF YOU CAN SOLVE YOUR PROBLEM?</div>
            <div className="about-cards">
                <div className="about-card" data-aos={"fade-left"}><StetchIcon/>At Near By Clinic</div>
                <div className="about-card" data-aos={"fade"}><HomeIcon/>At Home</div>
                <div className="about-card" data-aos={"fade-right"}><Heart/>In Privacy & Comfort</div>
            </div>

        </div>
    );
}
 
export default About;