import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: ["Hello!, I'm Jenny", '<I Love Building Things />'],
        loop: true,
        delaySpeed: 2500,
      })
    
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
   
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="https://i.ibb.co/N7qq026/jenny0.jpg" />
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
        <h1 className="text-5xl lg:tesxt-6xl font-semibold scroll-px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>

    </div>
  )
}