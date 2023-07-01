import {FaBlog, FaFacebookF, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaPhone, FaPinterest, FaSearch, FaTwitter, FaYoutube} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
const MiniNavbar = () => {
    return (
        <div className="min-nav-container">
            <div className="min-nav-icons">
            <FaBlog/>
            <FaFacebookF/>
            <FaInstagram />
            <FaTwitter/>
            <FaLinkedin/>
            <FaYoutube/>
            <FaPinterest/>
            </div>
            <div className="min-nav-contact">
                <div><FaSearch/></div>
                <div><FaPhone/>+91-9036 490 490</div>
                <div><GrMail/>support@subhag.in</div>
            </div>
            
        </div>
    );
}
 
export default MiniNavbar;