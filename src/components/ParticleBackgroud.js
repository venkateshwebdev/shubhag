import Particles from "react-particles-js";

import particleConfig from "./cofig/particleConfig";

export default function ParticleBackground(){
    return(
      <Particles params={particleConfig}></Particles>  
    )
}