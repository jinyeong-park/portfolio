import React from 'react';
import { SocialIcon } from "react-social-icons";

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
            {/* social icons */}
            <SocialIcon url="https://linkedin.com/in/jennypark7" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://twitter.com/jaketrent" fgColor="gray" bgColor="transparent" />
            <SocialIcon url="https://twitter.com/jaketrent" fgColor="gray" bgColor="transparent" />
            <div className="flex flex-row items-center text-gray-300 cursor-pointer">
                <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p> 
            </div>
           
        </div>
    </header>
  
  )
}
