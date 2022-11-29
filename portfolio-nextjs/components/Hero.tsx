import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: ['Hello!, My name is Jenny.', '<I Love Building Things />'],
        loop: true,
        delaySpeed: 2000,
      })
    
  return (
    <div>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
    </div>
  )
}