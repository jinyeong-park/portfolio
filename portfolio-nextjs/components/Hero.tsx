import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from "../components/BackgroundCircles";



type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: ["Hello! I'm Jenny", '<I Love Building Things />'],
        loop: true,
        delaySpeed: 3500,
      })
    
  return (
    <div className="h-screen top-10 flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
   
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="https://i.ibb.co/N7qq026/jenny0.jpg" />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
          <h1 className="text-4xl lg:tesxt-6xl font-semibold scroll-px-10 text-neutral-700">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
            <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
            <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
            <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>


    </div>
  )
}