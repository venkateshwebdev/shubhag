import MiniNavbar from "./MiniNavbar";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-main">
                <div className={"fc"}>
                    <h2>More Information</h2>
                    <div className="footer-content">
                        <p className={"footerp"}>About Us</p>
                        <p className={"footerp"}>Contact Us</p>
                        <p className={"footerp"}>Press and Media</p>
                        <p className={"footerp"}>Careers</p>
                        <p className={"footerp"}>Privacy Policy</p>
                        <p className={"footerp"}>Terms & Conditions</p>
                        <p className={"footerp"}>How Does it work?</p>
                        <p className={"footerp"}>Meet The Team</p>
                    </div>
                </div>
                <div className={"fc"}>
                    <h2>Recommended</h2>
                    <div className="footer-content">
                        <p className={"footerp"}>Blog</p>
                        <p className={"footerp"}>Videos</p>
                        <p className={"footerp"}>Partner With Us</p>
                        <p className={"footerp"}>Partner Clinics</p>
                        <p className={"footerp"}>IUI Sucess Tips</p>
                        <p className={"footerp"}>Research Data</p>
                        <p className={"footerp"}>Certifications</p>
                    </div>
                    </div>
                <div className={"fc"}>
                    <h2>Connect</h2>
                    <div className="footer-content">
                        <p>Contact : + 91 90364 90490</p>
                        <p>WhatsApp : +91 90364 90490</p>
                        <p>Email : info@subhag.in</p>
                        <p>Subhag HealthTech</p>
                        <p>Supported By Social Alpha – A Tata Trust Initiative</p>
                        <p>(Research Of Germany, Love Of India)</p>
                        <p>Bengaluru Karnataka – 560077</p>
                    </div>
                    </div>
            </div>
            <div className="footer-self">
                <img style={{height:"40px"}} src={"https://subhag.in/wp-content/uploads/2023/06/subhag-v-conceive-home-insemination-kit-payment-information-1-1024x54.png"}/>
                <div>By using this website I agree to be contacted by Subhag HealthTech over phone and email. I do not have any objection to receiving emails, messages (SMS or any other mode) and calls from Subhag HealthTech. This consent shall supersede any preferences set through Do Not Disturb (DND Register)/ National Customer Preference Register (NCPR).</div>
            </div>
            <MiniNavbar/>
        </div>
    );
}
 
export default Footer;