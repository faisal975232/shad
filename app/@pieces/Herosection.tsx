import React from "react"
import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Herosection() {
  return (
    <div>
      <Card className="grid grid-cols-1 gap-4 px-16 py-4 md:grid-cols-2">
        <div className="justify-self-center py-8 md:justify-self-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hi ! I am Faisal Ali{" "}
          </h1>

          <h2 className="mt-6 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Developing great things for over 4 years
          </h2>
          <div className=" justify-left mt-4 flex gap-8">
            <Badge className="text-center">Engineer</Badge>
            <Badge className="text-center">Full Stack Developer</Badge>
          </div>
          <div className="grid grid-cols-4 gap-4  py-8 md:grid-cols-4">
            <div>
              <h2 className="scroll-m-20 pb-2  text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                +10{" "}
              </h2>
              <h4 className="text-center text-xs font-bold">
                Projects in Laravel
              </h4>
            </div>

            <div>
              <h2 className="scroll-m-20 pb-2  text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                +5
              </h2>
              <h4 className="text-center text-xs font-bold">
                Projects in React
              </h4>
            </div>

            <div>
              <h2 className="scroll-m-20 pb-2  text-center text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                +6
              </h2>
              <h4 className="text-center text-xs font-bold">
                Projects in Node Js
              </h4>
            </div>
          </div>
          <Badge className="text-center text-sm">
            Contact: king975232@gmail.com
          </Badge>
        </div>

        <div className="justify-self-center md:justify-self-center">
          <Image
            className=" rounded"
            src="/profilepic.jpg"
            alt="My Image"
            width={300}
            height={300}
          />
        </div>
      </Card>
    </div>
  )
}

export default Herosection
