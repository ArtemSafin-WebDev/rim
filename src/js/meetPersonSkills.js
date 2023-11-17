import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function meetPersonSkills() {
  const skills = document.querySelectorAll(".redtag-meet__person-skill-status")
  
  skills?.forEach((skill) => {
    const skillCount = Number(skill?.dataset?.count)
    const skillCircles = [...skill?.getElementsByTagName("span")]?.reverse()?.slice(0, skillCount)
    
    skillCircles?.forEach((circle, index) => {
      gsap.to(circle, {
        backgroundColor: "#F20D30",
        duration: index * 0.4,
        delay: .75,
        ease: "elastic.inOut",
        scrollTrigger: {
          trigger: ".redtag-meet__person-skills",
        }
      })
    })
  })
}