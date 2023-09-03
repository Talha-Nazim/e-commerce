"use client"
import { useState } from "react";
const FAQCard = () => {
    
    const [isOpen , setIsOpen] = useState(false)

    
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="">
            FAQCard
            <div onClick={handleOpen} className="px-4 py-5 bg-blue-600 text-white">
             <h2 className="text-xl">Is it legal to cover home deductibles?</h2>
            </div>
            
            
            <div className={` bg-blue-950 text-white overflow-hidden duration-300 ${isOpen ? "max-h-48" : "max-h-0"}`}>
             <p className="px-4 py-5">
        We understand that when our customers need a roofing quote, they need it as soon as possible. We aim to provide quotes within 24-48 hours after receiving the required information. Contact us here, and we will get back to you ASAP with a quote.
             </p>
            </div>
           
            

        </div>
    )
}
export default FAQCard