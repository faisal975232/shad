import React from "react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Aboutme() {
  return (
    <div>
      <Card className=" px-16 py-4 ">
        <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight lg:text-4xl">
          About Me
        </h1>
        <h5 className="mt-3 text-center font-bold ">
          I am an engineer with a passion for web development. With 4 years of
          experience in PHP Laravel, HTML, CSS, Bootstrap, and Tailwind, as well
          as 3 years in MERN stack technologies, including React.js, Express.js,
          MongoDB, and Node.js, I bring a diverse skill set to the table. I am
          also proficient in Next.js. I thrive on challenging projects and
          believe in delivering exceptional results. Let's collaborate and
          create something amazing together!
        </h5>
      </Card>
    </div>
  )
}

export default Aboutme
