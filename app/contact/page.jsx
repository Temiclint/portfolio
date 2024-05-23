/* eslint-disable react/no-unescaped-entities */
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"

import Form from "@/components/Form"


const Contact = () => {
  return <section>
    <div className="container mx-auto">
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
        <div className="flex flex-col justify-center">
       
          <div className="flex items-center gap-x-4 text-primary text-lg mb-4">  <span className="w-[30px] h-[2px] bg-primary"></span> Say Hello 👋</div>
          <h1 className="h1 max-2-md mb-8">Let's Work Together!</h1>
          <p className="subtitle max-w-[400px]">I'm excited to collaborate on your next project. 
          Whether you need web design, development, or brand development, I'm here to 
          help bring your vision to life. Reach out today, and let's start creating something amazing together!</p>
        </div>
      {/* illustrations */}
        <div className="hidden xl:flex w-full bg-contact_illustration bg-contain bg-top bg-no-repeat"></div>
      </div>

      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32"> 
        {/* info */}
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
          {/* mail */}
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary" />
            <div>contact@direadelaja.com</div>
          </div>
           {/* address */}
           <div className="flex items-center gap-x-8">
            <HomeIcon size={18} className="text-primary" />
            <div>Lagos, Nigeria</div>
          </div>
           {/* mail */}
           <div className="flex items-center gap-x-8">
            <PhoneCall size={18} className="text-primary" />
            <div>+234 816 617 4296</div>
          </div>
          
        </div>
      
     <Form />
      </div>
    </div>
  </section>
}

export default Contact