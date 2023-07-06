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

function Skills() {
  return (
    <div>
      <div className=" px-2 py-4 ">
        <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight lg:text-4xl">
          Skills
        </h1>

        <div className="grid grid-cols-2  gap-4 p-4 md:grid-cols-6">
          <Card className=" p-4 text-center">
            <i className="bx bxl-react text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              React
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-nodejs text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Node
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-mongodb text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-sm font-extrabold tracking-tight lg:text-2xl">
              Mongodb
            </h5>
          </Card>

          <Card className=" p-4 ">
            <svg
              width="40px"
              height="50px"
              viewBox="0 0 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              className="m-auto"
            >
              <g>
                <path
                  d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"
                  fill="none"
                
                  className="fill-black dark:fill-white"
                ></path>
              </g>
            </svg>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Next js
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <svg
               width="40px"
               height="50px"
              viewBox="0 0 15 15"
            
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="m-auto "
            >
              <path
                d="M2 3.57148L1.84189 3.09714C1.59403 3.17976 1.45156 3.43928 1.51493 3.69275L2 3.57148ZM4.35714 2.78577L4.80436 2.56216C4.69308 2.3396 4.43509 2.23274 4.19903 2.31142L4.35714 2.78577ZM9.07143 12.2143L8.62422 12.4379C8.6865 12.5625 8.79792 12.6555 8.93163 12.6944C9.06535 12.7333 9.20925 12.7147 9.32868 12.6431L9.07143 12.2143ZM13 9.85719L13.2572 10.2859C13.3729 10.2165 13.4556 10.1034 13.4866 9.97207C13.5176 9.84079 13.4942 9.70256 13.4218 9.58876L13 9.85719ZM10.25 5.53577L10.1287 5.0507C9.97281 5.08968 9.84513 5.20123 9.78558 5.35052C9.72604 5.4998 9.74188 5.66861 9.82817 5.8042L10.25 5.53577ZM11.8214 5.14291L12.2214 4.84291C12.1007 4.68197 11.8953 4.60905 11.7002 4.65784L11.8214 5.14291ZM13 6.71434L13.1581 7.18868C13.3106 7.13786 13.4293 7.01683 13.4773 6.86342C13.5252 6.71001 13.4964 6.54292 13.4 6.41434L13 6.71434ZM3.57143 9.85719L3.08636 9.97846C3.12014 10.1136 3.20874 10.2285 3.33082 10.2955C3.45291 10.3625 3.59742 10.3756 3.72954 10.3315L3.57143 9.85719ZM2.15811 4.04582L4.51526 3.26011L4.19903 2.31142L1.84189 3.09714L2.15811 4.04582ZM3.90993 3.00937L6.8283 8.84611L7.72272 8.39889L4.80436 2.56216L3.90993 3.00937ZM6.8283 8.84611L8.62422 12.4379L9.51864 11.9907L7.72272 8.39889L6.8283 8.84611ZM9.32868 12.6431L13.2572 10.2859L12.7428 9.42845L8.81418 11.7856L9.32868 12.6431ZM13.4218 9.58876L11.7718 6.9959L10.9282 7.53278L12.5782 10.1256L13.4218 9.58876ZM11.7718 6.9959L10.6718 5.26733L9.82817 5.8042L10.9282 7.53278L11.7718 6.9959ZM10.3713 6.02084L11.9427 5.62798L11.7002 4.65784L10.1287 5.0507L10.3713 6.02084ZM11.4214 5.44291L12.6 7.01434L13.4 6.41434L12.2214 4.84291L11.4214 5.44291ZM12.8419 6.24L11.1919 6.79L11.5081 7.73868L13.1581 7.18868L12.8419 6.24ZM11.1919 6.79L7.1174 8.14816L7.43362 9.09684L11.5081 7.73868L11.1919 6.79ZM7.1174 8.14816L3.41331 9.38285L3.72954 10.3315L7.43362 9.09684L7.1174 8.14816ZM4.0565 9.73593L2.48507 3.45021L1.51493 3.69275L3.08636 9.97846L4.0565 9.73593ZM2.5 1H12.5V0H2.5V1ZM14 2.5V12.5H15V2.5H14ZM12.5 14H2.5V15H12.5V14ZM1 12.5V2.5H0V12.5H1ZM2.5 14C1.67157 14 1 13.3284 1 12.5H0C0 13.8807 1.11929 15 2.5 15V14ZM14 12.5C14 13.3284 13.3284 14 12.5 14V15C13.8807 15 15 13.8807 15 12.5H14ZM12.5 1C13.3284 1 14 1.67157 14 2.5H15C15 1.11929 13.8807 0 12.5 0V1ZM2.5 0C1.11929 0 0 1.11929 0 2.5H1C1 1.67157 1.67157 1 2.5 1V0Z"
                fill="none"
                
                className="fill-black dark:fill-white"
              />
            </svg>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Laravel
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-php text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Php
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-javascript text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Javascript
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-jquery text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Jquery
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-html5 text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Html5
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-css3 text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Css
            </h5>
          </Card>

          <Card className=" p-4 text-center">
            <i className="bx bxl-tailwind-css text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Tailwind
            </h5>
          </Card>


          <Card className=" p-4 text-center">
            <i className="bx bxl-bootstrap text-6xl font-extrabold "></i>
            <h5 className="scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Bootstrap
            </h5>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Skills
