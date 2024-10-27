"use client"
import About from "./about/page";
import Hero from "./hero/page";
import ProjectSec from "./projects/page";
import Skills from "./skills/page";


export default  function Home(){
      return(
        
  <div>
    <Hero/>
    <About/>
     <Skills/>
     <ProjectSec/>
    </div>
       
        
      )
}