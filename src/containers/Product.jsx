import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import {VscDebugBreakpointLog} from "react-icons/vsc"
import verify from "../utils/icons8-verify-96.png"
const Product = (props) => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:"ease"})
    },[])
    return (
        <div className="product-container">
            <div className="product-des">
                <div className="product-content">
                    <div>{props.first}</div> 
                        <button>{props.button}</button> 
                        <div style={{fontSize:"22px"}}>{props.des}</div>
                        <div className="product-buy" ><img src="https://subhag.in/wp-content/uploads/2021/02/ezgif.com-gif-maker-1-1.png" alt="" /></div>
                        </div>
                <div className="product-image" data-aos={"fade-up"}><img src={props.src}/></div>
            </div>
            <div className="hr"></div>
            <div className="product-video-container">
                <div className="product-video" data-aos={"slide-up"}><iframe style={{borderRadius:"15px",border:"4px solid #40c7b9"}} width="728" height="410" src={`https://www.youtube.com/embed/${props.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                <div data-aos={"fade"}>
                <div className="sss">{props.video}</div>
                <div className="ss"><img src={verify}/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</div>
                <div className="ss"><img src={verify}/>consectetur adipiscing elit, sed.</div>
                <div className="ss"><img src={verify}/>Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
            {props.second&&
            <>
            <div className="hr"></div>
            <div className="product-video-container">
                <div data-aos={"fade"}>
                <div className="sss">{props.videoo}</div>
                <div className="ss"><img src={verify}/>ग्राहक सेवा होना महत्वपूर्ण है, लेकिन इसके बाद ग्राहक सेवा भी आएगी।.</div>
                <div className="ss"><img src={verify}/>लेकिन इसे एडिपिसिंग डेवलपर द्वारा आगे बढ़ाया जाएगा।.</div>
                <div className="ss"><img src={verify}/>ग्राहक बहुत खुश है.</div>
                </div>
            
                <div className="product-video" data-aos={"slide-up"}><iframe style={{borderRadius:"15px",border:"4px solid #40c7b9"}} width="728" height="410" src={`https://www.youtube.com/embed/${props.idd}`} title="YouTube video player" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                
            </div>
            </>}
        </div>
    );
}
 
export default Product;