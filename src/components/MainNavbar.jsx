import { useContext, useEffect, useState } from "react";
import ScrollContext from "../context/scrollContext";

const MainNavbar = () => {
    const posContext = useContext(ScrollContext)
    useEffect(()=>{
        const handleScroll = ()=>{
            const current = window.scrollY
            if(current>50) posContext?.setPos(true)
            else{posContext?.setPos(false)}
        }
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <div className={`main-nav-container ${posContext?.pos&&"main-nav-fixed"}`}>
            <div><img src="https://subhag.in/wp-content/uploads/2019/02/cropped-forajendra_23_01_19_website_logo-1.png"/></div>
            <div className="main-nav-el">
                <a href="/" className="nav-after" >Home</a>
                <a href="/" className="nav-after">About Us</a>
                <a href="/" className="nav-after">Products</a>
                <a href="/" className="nav-after">IUI insights</a>
                <a href="/" className="nav-after">Certifications</a>
                <a href="/" className="nav-after">Blog</a>
                <a href="/" className="nav-after">Contact Us</a>
            </div>
            <div className="main-nav-button"><button>Order Now</button></div>
        </div>
    );
}
 
export default MainNavbar;