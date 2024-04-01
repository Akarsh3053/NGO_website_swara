"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"


export function Contact() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer >
      <DrawerTrigger asChild>
        <Button variant="default">Contact us</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[50vh] max-w-full m-auto ">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Contact us here..</DrawerTitle>
            <DrawerDescription className="">
             <h1>Schedule Free Consultation.</h1>
             
               <Input className="outline-none  mt-4" placeholder="Name" />
               <Input className="outline-none  mt-4" placeholder="Email" />

             <Textarea placeholder="Your Query" className="mt-4" />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="default">Sudmit</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
