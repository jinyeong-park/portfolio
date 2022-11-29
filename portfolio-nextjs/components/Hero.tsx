import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: ['Hello!, My name is Jenny.', '<I Love Building Things />'],
        loop: true,
        delaySpeed: 2000,
      })
    
  return (
    <div className="h-screen flex flex-col space-y-8 item-center justify-center">
        <BackgroundCircles />
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </h1>

    </div>
  )
}