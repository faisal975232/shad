import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

function Projects() {
  return (
    <div>
      <div className=" px-2 py-4 ">
        <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight lg:text-4xl">
          Projects
        </h1>

        <div className="grid grid-cols-2  gap-4 p-4 md:grid-cols-4 ">
          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Repal
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Short Video App
            </h5>

            <div className="my-3 flex justify-center gap-8">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Apis
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      Create, watch and download interesting short videos and be
                      a part of the growing & thriving community of talented
                      creators, influencers, and like-minded people, enabling
                      people to discover, create & share experiences through
                      short videos.
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>Playstore Link</DialogTitle>
                    <DialogDescription>
                      <Button asChild className="my-2">
                        <Link
                          href=" https://play.google.com/store/apps/details?id=com.repal.app&hl=en-IN"
                          target="_blank"
                        >
                          Open
                        </Link>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      My responsibilites were to make backend Apis and to
                      maintain full Backend Services
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Bharplate
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Restaurent Management System
            </h5>

            <div className="my-3 flex justify-center gap-8">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Apis
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      BharPlate is designed to help Cafe's , Restaurants, Pubs,
                      Bars etc. A Cloud based system that provide digital menus
                      and provide complete digital Dine-in.
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      To make Backend Apis and maintain database .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Mangal Matrimony
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Matrimony App
            </h5>

            <div className="my-3 flex justify-center gap-8">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Apis
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      A Matrimony App with all the required filters .
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      My responsibilites were to make backend Apis for the App .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Rockpay
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Payment Solution
            </h5>

            <div className="my-3 flex justify-center gap-8">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel
              </div>

              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel Blade
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      Rockpay is one of the most trusted payment gateway service
                      providers in India. It is dedicated to providing the most
                      affordable payment gateway for all types of businesses
                      with the lowest transaction
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>Website Link</DialogTitle>
                    <DialogDescription>
                      <Button asChild className="my-2">
                        <Link href="https://rockpay.in/" target="_blank">
                          Open
                        </Link>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      To integrate third party apis to make the payment . Full
                      fledged admin panel to show every tiny detail from
                      dashboard to tables .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Investment Management System
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Money Management System
            </h5>

            <div className="my-3 flex justify-center gap-8">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel Blade
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      This project was built for a client who is investor , This
                      project easily manages all the investors, investment,
                      their payments etc . It was based on Laravel.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Payripe
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Fintech Software
            </h5>

            <div className="my-3 flex justify-center gap-8">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Laravel
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Apis
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      A fintech software to integrate with payment gateways . To
                      manage all the merchants and their transactions .
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>Website Link</DialogTitle>
                    <DialogDescription>
                      <Button asChild className="my-2">
                        <Link href=" https://payripe.in/" target="_blank">
                          Open
                        </Link>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      My responsiblities were to make the frontend website on
                      react js and to make the admin panel which was based on
                      Laravel .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Netaji.live
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              News Platform
            </h5>

            <div className="my-3 flex justify-center gap-2">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Node Express
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                React
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                MongoDB
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      A full fledged news website with everything possible
                      feature .
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>Website Link</DialogTitle>
                    <DialogDescription>
                      <Button asChild className="my-2">
                        <Link href=" https://netaji.live/" target="_blank">
                          Open
                        </Link>
                      </Button>
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      My responsibilites were to make backend Apis in Node
                      Express js . And to connect these apis with frontend on
                      react js . MongoDB is used as a database.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Sms Provider
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              A software for a sms provider
            </h5>

            <div className="my-3 flex justify-center gap-2">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Node Express
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                React
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                MongoDB
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      A sms sending system with full an admin panel
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      To make apis in node express js and to connect those apis
                      with frontend react js .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              Student Loan
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Digital Loans
            </h5>

            <div className="my-3 flex justify-center gap-2">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Node Express
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                React
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                MongoDB
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      A digital Loan Web App
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      To make secure admin panel for banks . To make backend
                      apis and front end .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

          <Card>
            <h5 className="my-3 scroll-m-20 text-center text-xl font-extrabold tracking-tight lg:text-2xl">
              DMS
            </h5>
            <h5 className="scroll-m-20 text-center text-sm font-semibold tracking-tight lg:text-sm">
              Desludge Management System
            </h5>

            <div className="my-3 flex justify-center gap-2">
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                Node Express
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                React
              </div>
              <div className="flex items-center">
                <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                MongoDB
              </div>
            </div>

            <div className="my-2 flex justify-center gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>More Info</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[400px] md:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Project Description</DialogTitle>
                    <DialogDescription>
                      A desludge management system with all the cliens and
                      everything fron invoices to transactions .
                    </DialogDescription>
                  </DialogHeader>

                  <Separator className="my-4" />

                  <DialogHeader>
                    <DialogTitle>My Responsibilities</DialogTitle>
                    <DialogDescription>
                      To make backend apis in node js with frontend in react js .
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                  <DialogFooter></DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>

      
        </div>
      </div>
    </div>
  )
}

export default Projects
