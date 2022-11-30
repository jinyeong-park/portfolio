import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img 
        initial={{
            x:-200,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView ={{x:0}}
        viewport={{ once: true }}
        src="https://i.postimg.cc/Y0qS3gbW/433.jpg" 
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-9 md:px-10">
            <h4 className="text-4xl fond-semibold">
                Here is a {""} <span className="underline decoration-[#F7AB0A]/50">little</span> background
            </h4>
            <p className="text-sm">
                Hi, I am Jenny. I’m a Software Engineer and a web developer who has a lot of interests in UI/UX.
                I’m particularly interested in connecting people, making life easier, more productive and enjoyable
                since my previous jobs let me travelled a lot and kept moving abroad so I always needed to adapt a new environment and people.
                I am passionate about empowering and inspiring like-minded peers and also love social interactions.
                I am very passionate about better understanding of computers and using this knowledge to solve real-world problems.
            </p>
        </div>
        </div>
  )
}

export default About

