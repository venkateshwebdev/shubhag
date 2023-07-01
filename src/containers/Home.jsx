import { useContext } from "react";
import ScrollContext from "../context/scrollContext";

const Home = () => {
    const posContext = useContext(ScrollContext)
    
    return (
        <div className={`home-container ${posContext?.pos&&"home-container-when-nav-fixed"}`}>
            <div className="home-hero-title">Improve chance of conception with <span>IUI at Home</span>.</div>
            <div className="home-buttons-container">
                <button>I'M Couple ⪼</button>
                <button className="sp">I'M Doctor ⪼</button>
                <button>I'M Investor ⪼</button>
            </div>
            <div className="home-foot">Private, Comfortable and Effective</div>
            </div>
    );
}
 
export default Home;