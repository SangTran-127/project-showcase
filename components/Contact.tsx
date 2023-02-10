import React from 'react'
import mail from "@/assests/mail.png"
import github from "@/assests/github.png"
import phone from "@/assests/phone.png"
import gps from "@/assests/gps.png"
import facebook from "@/assests/facebook.png"
import linkedin from "@/assests/linkedin.png"
import Image from 'next/image'

const contacts = [
    {
        id: 1,
        content: "pattietrusdale@gmail.com",
        icon: mail
    },
    {
        id: 2,
        content: "+8421 223 2234",
        icon: phone
    },
    {
        id: 3,
        content: "34 Milwaukee Avenue",
        icon: gps
    }
]
const socials = [
    {
        id: 1,
        content: "github.com/pattietrusdale",
        icon: github
    },
    {
        id: 2,
        content: "linkedin.com/in/pattie-trusdale-34...",
        icon: linkedin
    },
    {
        id: 3,
        content: "facebook.com/pattie.trusdale",
        icon: facebook
    }
]

export const Contact = () => {
    return (
        <div className='mt-32'>
            <div>
                <h1 className='text-4xl leading-none text-[#074F63]'>Want to know more, contact me!</h1>
            </div>
            <div className='md:flex md:justify-between lg:ml-10 md:gap-3'>
                <div className='my-10 md:w-1/2'>
                    <div className='p-10 md:p-5 flex flex-col gap-4 mx-auto rounded-md' style={{
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'
                    }}>
                        {
                            contacts.map((contact) => (
                                <div key={contact.id} className='flex gap-2'>
                                    <Image src={contact.icon} alt={contact.content} />
                                    <p>{contact.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='my-10 md:w-1/2 flex flex-col gap-4'>
                    {
                        socials.map((social) => (
                            <div key={social.id} className='flex gap-2'>
                                <Image src={social.icon} alt={social.content} />
                                <p>{social.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

