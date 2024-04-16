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

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    query: '',
  });

  //@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_g4a1kig',
        'template_6c1nees',
        {
          from_name: formData.username,
          to_name: "Akarsh Bajpai",
          from_email: formData.email,
          to_email: "onlyakarsh@gmail.com",
          message: formData.query,
        },
        'Zqbt0KdyiJ6MSrYRy'
      )
      .then(
        () => {
          alert("Thank you. I will get back to you soon...")
        },
        //@ts-ignore
        (error) => {
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

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
              <Input value={formData.username} onChange={handleChange} className="outline-none  mt-4" placeholder="Name" />
              <Input value={formData.email} onChange={handleChange} className="outline-none  mt-4" placeholder="Email" />

              <Textarea value={formData.username} onChange={handleChange} placeholder="Your Query" className="mt-4" />
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button onClick={handleSubmit} variant="default">Submit</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
