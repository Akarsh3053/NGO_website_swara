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
import { useState } from "react"
import emailjs from "@emailjs/browser";


export function Contact() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  //@ts-ignore
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  //@ts-ignore
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //@ts-ignore
  const handleMsgChange = (event) => {
    setMsg(event.target.value);
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_k0tjzi9',
        'template_oguryi2',
        {
          from_name: name,
          to_name: "Dr. Pragya Tripathi",
          from_email: email,
          to_email: "swaracounsellingnest@gmail.com",
          message: msg,
        },
        'w6_KwrmD_Mnb9BC_x'
      )
      .then(
        () => {
          alert("Thank you. We will get back to you soon...")
        },
        (error) => {
          alert("Ahh, something went wrong. Please try again.");
        }
      );
    setName('');
    setEmail('');
    setMsg('');
    setIsDrawerOpen(false);

  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button variant="default">Contact us</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[50vh] max-w-full m-auto ">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Contact us here..</DrawerTitle>
            <DrawerDescription className="">
              <h1>Schedule Free Consultation.</h1>
              <Input value={name} onChange={handleNameChange} className="outline-none  mt-4" placeholder="Name" />
              <Input value={email} onChange={handleEmailChange} className="outline-none  mt-4" placeholder="Email" />

              <Textarea value={msg} onChange={handleMsgChange} placeholder="Your Query" className="mt-4" />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={handleSubmit} variant="default">Send</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
