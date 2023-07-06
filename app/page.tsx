
import Link from "next/link"
import Herosection from "./@pieces/Herosection"
import Aboutme from "./@pieces/Aboutme"
import Skills from "./@pieces/Skills"
import Projects from "./@pieces/Projects"




export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
     <Herosection/>
     <Aboutme/>
     <Skills/>
     <Projects/>
    </section>
  )
}
