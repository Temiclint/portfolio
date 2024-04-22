'use client'

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {User, MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react'

const Form = () => {
  return <form className="flex flex-col gap-y-4">
{/* input */}
<div className="relative flex items-center">
    <Input type='name' id='name' placeholder='Name'/>
    <User className="absolute right-6" size={20}/>
</div>
{/* input */}
<div className="relative flex items-center">
    <Input type='email' id='email' placeholder='Email'/>
    <MailIcon className="absolute right-6" size={20}/>
</div>
{/* textarea */}
<div className="relative flex items-center">
    <Textarea type='message' id='message' placeholder='Your Message Here'/>
    <MessageSquare className="absolute top-4 right-6" size={20}/>
</div>
<Button className = "flex items-center rounded-[30px] gap-x-2 max-w-[166px]">Get in Touch 
<ArrowRightIcon size={20}/>
</Button>
</form>
}


export default Form